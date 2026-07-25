// Sticky nav active state on scroll
(function(){
    const sections = ['seo','ppc','social','content','email','analytics'];
    const links = document.querySelectorAll('.svc-nav-link');
    const navOffset = 120;
    function update(){
        let current = sections[0];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if(el && el.getBoundingClientRect().top <= navOffset) current = id;
        });
        links.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#'+current);
        });
    }
    window.addEventListener('scroll', update, {passive:true});
    update();
})();
