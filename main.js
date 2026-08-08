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

        const data = new URLSearchParams({
            fname:   fname,
            lname:   (contactForm.querySelector('#lname')   || {}).value || '',
            email:   email,
            company: (contactForm.querySelector('#company') || {}).value || '',
            service: (contactForm.querySelector('#service') || {}).value || '',
            message: message
        });

        fetch('https://script.google.com/macros/s/AKfycbyWWCs1_f--_G_-0_C6hT4-S2I_bBoHS6MaMa_D5r-sLM6iYMtN40V-MV5QPo-Ce0CV/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(() => {
            if (fb) fb.innerHTML = '<div class="form-success">✓ Got it! I\'ll reply within 24 hours. For instant reply, <a href="https://wa.me/917829303517" target="_blank" rel="noopener" style="color:#15803d;font-weight:600">WhatsApp me →</a></div>';
            if (btn) { btn.textContent = 'Message Sent ✓'; btn.disabled = false; }
            contactForm.reset();
        }).catch(() => {
            if (fb) fb.innerHTML = '<div class="form-error" style="background:#fef2f2;border:1.5px solid #fca5a5;color:#b91c1c;padding:.9rem 1.1rem;border-radius:8px;font-size:.85rem">Couldn\'t send — please WhatsApp me instead: <a href="https://wa.me/917829303517" style="color:#b91c1c;font-weight:600">+91 78293 03517</a></div>';
            if (btn) { btn.textContent = 'Send Message →'; btn.disabled = false; }
        });
    });
}

// ── CUSTOM CURSOR (desktop/mouse only)
if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);
    document.body.classList.add('has-custom-cursor');

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let started = false;

    let lastSmokeAt = 0;
    let lastSmokeX = null, lastSmokeY = null;
    function spawnSmoke(x, y) {
        const now = performance.now();
        if (now - lastSmokeAt < 16) return;
        const dx = lastSmokeX === null ? 0 : x - lastSmokeX;
        const dy = lastSmokeY === null ? 0 : y - lastSmokeY;
        const dist = Math.hypot(dx, dy);
        if (dist < 4 && now - lastSmokeAt < 60) return;
        lastSmokeAt = now;
        lastSmokeX = x; lastSmokeY = y;

        const puffs = 1 + (dist > 18 ? 1 : 0);
        for (let i = 0; i < puffs; i++) {
            const puff = document.createElement('div');
            puff.className = 'cursor-smoke';
            const jitterX = (Math.random() - 0.5) * 10;
            const jitterY = (Math.random() - 0.5) * 10;
            const driftX  = (Math.random() - 0.5) * 46;
            const driftY  = -18 - Math.random() * 30;
            const size    = 14 + Math.random() * 16;
            const dur     = 0.6 + Math.random() * 0.5;
            puff.style.left = (x + jitterX) + 'px';
            puff.style.top  = (y + jitterY) + 'px';
            puff.style.width  = size + 'px';
            puff.style.height = size + 'px';
            puff.style.setProperty('--dx', driftX + 'px');
            puff.style.setProperty('--dy', driftY + 'px');
            puff.style.animationDuration = dur + 's';
            document.body.appendChild(puff);
            puff.addEventListener('animationend', () => puff.remove());
        }
    }

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        if (!started) { ringX = mouseX; ringY = mouseY; started = true; }
        dot.style.opacity = ring.style.opacity = '1';
        spawnSmoke(mouseX, mouseY);
    });

    document.addEventListener('mouseleave', () => {
        dot.style.opacity = ring.style.opacity = '0';
    });

    function spawnSplash(x, y) {
        const pulse = document.createElement('div');
        pulse.className = 'cursor-splash-ring';
        pulse.style.left = x + 'px';
        pulse.style.top  = y + 'px';
        document.body.appendChild(pulse);
        pulse.addEventListener('animationend', () => pulse.remove());

        const count = 10;
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
            const dist  = 40 + Math.random() * 50;
            const size  = 8 + Math.random() * 10;
            const p = document.createElement('div');
            p.className = 'cursor-smoke cursor-splash-particle';
            p.style.left = x + 'px';
            p.style.top  = y + 'px';
            p.style.width  = size + 'px';
            p.style.height = size + 'px';
            p.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
            p.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
            p.style.animationDuration = (0.5 + Math.random() * 0.3) + 's';
            document.body.appendChild(p);
            p.addEventListener('animationend', () => p.remove());
        }
    }
    document.addEventListener('mousedown', e => spawnSplash(e.clientX, e.clientY));

    function tickCursor() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(tickCursor);
    }
    requestAnimationFrame(tickCursor);

    const hoverSelector = 'a, button, .btn, .faq-q, input, textarea, select, [role="button"], .blog-card, .loc-card';
    document.addEventListener('mouseover', e => {
        if (e.target.closest(hoverSelector)) ring.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest(hoverSelector)) ring.classList.remove('cursor-hover');
    });
}
