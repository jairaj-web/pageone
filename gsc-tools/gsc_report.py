"""Google Search Console reporting for pageone-bangalore.netlify.app.

Usage:
  python gsc_report.py performance [--days 28]
  python gsc_report.py pages
  python gsc_report.py inspect <url>
  python gsc_report.py sitemaps
"""
import sys
import json
import argparse
from datetime import date, timedelta

from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_PATH = r"c:\Users\Lenovo\Desktop\Digital marketing\.gsc-credentials\pageone-seo-key.json"
SITE_URL = "https://pageone-bangalore.netlify.app/"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]


def get_service():
    creds = service_account.Credentials.from_service_account_file(KEY_PATH, scopes=SCOPES)
    return build("searchconsole", "v1", credentials=creds)


def performance(days):
    svc = get_service()
    end = date.today() - timedelta(days=2)
    start = end - timedelta(days=days)
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": ["query", "page"],
        "rowLimit": 100,
    }
    resp = svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
    rows = resp.get("rows", [])
    if not rows:
        print(f"No performance data yet for {start} to {end}. Site likely not indexed/ranking yet.")
        return
    print(f"{'Query':<45} {'Page':<35} {'Clicks':>7} {'Impr':>7} {'CTR':>7} {'Pos':>6}")
    for r in sorted(rows, key=lambda x: -x["impressions"]):
        q, page = r["keys"]
        page_short = page.replace(SITE_URL.rstrip("/"), "")
        print(f"{q[:44]:<45} {page_short[:34]:<35} {r['clicks']:>7} {r['impressions']:>7} {r['ctr']*100:>6.1f}% {r['position']:>6.1f}")


def pages():
    svc = get_service()
    end = date.today() - timedelta(days=2)
    start = end - timedelta(days=28)
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": ["page"],
        "rowLimit": 50,
    }
    resp = svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
    rows = resp.get("rows", [])
    if not rows:
        print("No page-level data yet.")
        return
    for r in sorted(rows, key=lambda x: -x["impressions"]):
        page = r["keys"][0].replace(SITE_URL.rstrip("/"), "")
        print(f"{page:<40} clicks={r['clicks']:<5} impressions={r['impressions']:<6} pos={r['position']:.1f}")


def inspect(url):
    svc = get_service()
    body = {"inspectionUrl": url, "siteUrl": SITE_URL}
    resp = svc.urlInspection().index().inspect(body=body).execute()
    result = resp.get("inspectionResult", {})
    idx = result.get("indexStatusResult", {})
    print(json.dumps(idx, indent=2))


def sitemaps():
    svc = get_service()
    resp = svc.sitemaps().list(siteUrl=SITE_URL).execute()
    for sm in resp.get("sitemap", []):
        print(f"{sm.get('path')}  status={sm.get('lastSubmitted')}  submitted={sm.get('isPending')}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["performance", "pages", "inspect", "sitemaps"])
    parser.add_argument("url", nargs="?")
    parser.add_argument("--days", type=int, default=28)
    args = parser.parse_args()

    if args.command == "performance":
        performance(args.days)
    elif args.command == "pages":
        pages()
    elif args.command == "inspect":
        if not args.url:
            print("Provide a URL to inspect")
            sys.exit(1)
        inspect(args.url)
    elif args.command == "sitemaps":
        sitemaps()
