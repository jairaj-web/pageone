document.getElementById('audit-form').addEventListener('submit',function(e){
    e.preventDefault();
    var url=document.getElementById('af-url').value.trim();
    var name=document.getElementById('af-name').value.trim();
    var phone=document.getElementById('af-phone').value.trim();
    var goal=document.getElementById('af-goal').value.trim();
    var fb=document.getElementById('af-feedback');
    if(!url||!name||!phone){fb.innerHTML='<div class="form-error" style="color:var(--red);font-size:.85rem;margin-bottom:.8rem">Please fill in your website, name and WhatsApp number.</div>';return;}
    var msg='Hi PageOne! I would like a FREE website audit.%0A%0A'
        +'Website: '+encodeURIComponent(url)+'%0A'
        +'Name: '+encodeURIComponent(name)+'%0A'
        +'WhatsApp: '+encodeURIComponent(phone)
        +(goal?'%0AGoal: '+encodeURIComponent(goal):'');
    fb.innerHTML='<div class="form-success">&#10003; Opening WhatsApp&hellip; send the message and I will reply within 24 hours.</div>';
    window.open('https://wa.me/917829303517?text='+msg,'_blank');
});
