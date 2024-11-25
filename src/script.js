function toggleHamburger() {
  const dropdown = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');

  // Toggle menu visibility
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }

  hamburger.classList.toggle('hamburger-active');
}


// const body = document.body;
// const toggleBtn = document.getElementById('toggleBtn');

// if(localStorage.getItem('theme')==='dark'){
//   body.classList.add('dark');
//   toggleBtn.textContent = 'Light Mode';

// }

// toggleBtn.addEventListener('click', ()  =>{
//   body.classList.toggle('dark');
//   const isDark  = body.classList.contains('dark');
//   toggleBtn.textContent = isDark  ? 'Light Mode': 'Dark Mode';
//   localStorage.setItem('theme', isDark  ? 'dark'  : 'light');
// })