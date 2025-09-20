
const root  = document.documentElement;
const saved = localStorage.getItem('theme');

root.dataset.theme = (saved === 'dark' || saved === 'light') ? saved : 'light';

document.getElementById('themeToggle').onclick = () => {
const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
root.dataset.theme = next;
localStorage.setItem('theme', next);
};





  if (window.Swiper) {

    // preventClicks:false, preventClicksPropagation:false
  }


  const modal   = document.getElementById('bioModal');
  const xImg    = document.getElementById('xImg');
  const xName   = document.getElementById('xName');
  const xRole   = document.getElementById('xRole');
  const xBio    = document.getElementById('xBio');
  let lastFocus = null;

  function openModal(data){
    lastFocus = document.activeElement;
    xImg.src = data.img || '';
    xImg.alt = data.name ? ('Ảnh ' + data.name) : '';
    xName.textContent = data.name || '';
    xRole.textContent = data.role || '';
    xBio.innerHTML = data.bio || '';
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden','false');
    modal.querySelector('.x-sheet').focus({preventScroll:true});
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }


  document.addEventListener('click', (e)=>{
    const trigger = e.target.closest('.bio-trigger');
    if (!trigger) return;
    e.preventDefault();
    const data = {
      name: trigger.dataset.name,
      role: trigger.dataset.role,
      img : trigger.dataset.img,
      bio : trigger.dataset.bio
    };
    openModal(data);
  });


  modal.addEventListener('click', (e)=>{
    if (e.target.hasAttribute('data-close')) closeModal();
  });


  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });


  const io = new IntersectionObserver((ents)=>{
    ents.forEach(ent=>{
      if (ent.isIntersecting) ent.target.classList.add('is-in');
    });
  }, {threshold: .12});
  document.querySelectorAll('.card, .hero, .section h2').forEach(el=>{
    el.classList.add('reveal'); io.observe(el);
  });

