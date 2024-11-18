function toggleHamburger() {
    const dropdown = document.getElementById('menu');
    dropdown.classList.toggle('hidden'); // Tailwind's `hidden` utility class
    console.log('Menu toggled');
  }