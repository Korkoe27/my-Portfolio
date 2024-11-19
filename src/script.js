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
