/* ═══ NEXAGROWTH — main.js ═══ */

// ── NAV SCROLL (transparent dark on hero → light on scroll)
const nav  = document.getElementById('nav');
const hero = document.querySelector('.hero');
let ticking = false;

function updateNav() {
    if (!nav) return;
    if (hero) {
        const threshold = hero.offsetTop + hero.offsetHeight - 80;
        nav.classList.toggle('light', window.scrollY > threshold);
    }
    nav.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { updateNav(); ticking = false; }); ticking = true; }
});
// inner pages: if no hero, force light nav
if (!hero && nav) nav.classList.add('light');
updateNav();

// ── MOBILE MENU
const hbg  = document.getElementById('hbg');
const mob  = document.getElementById('mob');
const mobX = document.getElementById('mob-x');

function openMenu()  {
    if (!mob || !hbg) return;
    mob.classList.add('open');
    hbg.classList.add('open');
    hbg.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    if (!mob || !hbg) return;
    mob.classList.remove('open');
    hbg.classList.remove('open');
    hbg.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}
if (hbg)  hbg.addEventListener('click', openMenu);
if (mobX) mobX.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.querySelectorAll('.mob a').forEach(a => a.addEventListener('click', closeMenu));

// ── SCROLL OBSERVER (fade animations)
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => io.observe(el));

// ── COUNTER ANIMATION
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    if (!target) return;
    const dur = 1800, start = performance.now();
    const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}
const cio = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); } });
}, { threshold: 0.4 });
document.querySelectorAll('[data-target]').forEach(el => cio.observe(el));

// ── CARD TILT
document.querySelectorAll('.case-card, .testi-card, .price-card, .feat-card, .blog-card, .work-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `translateY(-4px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
        card.style.transition = 'transform .08s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform .35s ease, box-shadow .25s ease';
    });
});

// ── FAQ ACCORDION
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const open = btn.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-q').forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            const ic = b.querySelector('.faq-icon'); if (ic) ic.textContent = '+';
            b.parentElement.classList.remove('faq-open');
        });
        if (!open) {
            btn.setAttribute('aria-expanded', 'true');
            const ic = btn.querySelector('.faq-icon'); if (ic) ic.textContent = '−';
            item.classList.add('faq-open');
        }
    });
});

// ── FILTER TABS
document.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
        const parent = tab.closest('[data-filter-group]') || document;
        parent.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const f = tab.dataset.filter;
        if (!f) return;
        document.querySelectorAll('[data-cat]').forEach(c => {
            c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
        });
    });
});

// ── ACTIVE NAV LINK
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mob ul a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0];
    if (href === path) a.classList.add('active');
});

// ── NEWSLETTER FORM
document.querySelectorAll('.nl-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        if (btn) { btn.textContent = 'Subscribed ✓'; btn.disabled = true; btn.style.opacity = '.7'; }
    });
});

// ── CONTACT FORM
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const fb  = document.getElementById('form-feedback');
        const btn = contactForm.querySelector('[type="submit"]');
        const fname   = (contactForm.querySelector('#fname')   || {}).value || '';
        const email   = (contactForm.querySelector('#email')   || {}).value || '';
        const message = (contactForm.querySelector('#message') || {}).value || '';

        if (!fname || !email || !message) {
            if (fb) fb.innerHTML = '<div class="form-error" style="background:#fef2f2;border:1.5px solid #fca5a5;color:#b91c1c;padding:.9rem 1.1rem;border-radius:8px;font-size:.85rem">Please fill in all required fields.</div>';
            return;
        }
        if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

        setTimeout(() => {
            if (fb) fb.innerHTML = '<div class="form-success">✓ Got it! I\'ll reply within 24 hours. For instant reply, <a href="https://wa.me/917829303517" target="_blank" rel="noopener" style="color:#15803d;font-weight:600">WhatsApp me →</a></div>';
            if (btn) { btn.textContent = 'Message Sent ✓'; btn.disabled = false; }
            contactForm.reset();
        }, 1000);
    });
}
