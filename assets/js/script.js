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
