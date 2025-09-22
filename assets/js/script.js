/*
const root  = document.documentElement;
const saved = localStorage.getItem('theme');

root.dataset.theme = (saved === 'dark' || saved === 'light') ? saved : 'light';

document.getElementById('themeToggle').onclick = () => {
const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
root.dataset.theme = next;
localStorage.setItem('theme', next);
};
*/

const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  root.dataset.theme = localStorage.getItem('theme') || 'light';

  btn.onclick = () => {
    btn.classList.add('is-toggling');
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next; localStorage.setItem('theme', next);
    setTimeout(()=>btn.classList.remove('is-toggling'), 380);
  };

   // Bật chế độ animation có JS
   document.body.classList.add('has-io');

   // Stagger nhẹ cho từng mục
   document.querySelectorAll('.timeline .t').forEach((el, i) => {
     el.style.setProperty('--stagger', i);
   });
 
   // Vẽ đường dọc khi timeline vào khung nhìn
   const tl = document.querySelector('.timeline');
   if (tl) {
     const ioLine = new IntersectionObserver((ents)=>{
       ents.forEach(ent=>{
         if(ent.isIntersecting){
           tl.classList.add('is-in');
           ioLine.unobserve(tl);
         }
       });
     }, { threshold: .12 });
     ioLine.observe(tl);
   }
 
   // Reveal từng item
   const ioItems = new IntersectionObserver((ents)=>{
     ents.forEach(ent=>{
       if(ent.isIntersecting){
         ent.target.classList.add('seen');
         ioItems.unobserve(ent.target);
       }
     });
   }, { threshold:.18, rootMargin: '0px 0px -10% 0px' });
 
   document.querySelectorAll('.timeline .t').forEach(el => ioItems.observe(el));