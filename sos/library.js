


// Select the hamburger menu and the navbar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Add event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});