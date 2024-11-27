// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Navbar Toggle for Mobile
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.navbar ul');
  const toggleButton = document.createElement('button');
  
  toggleButton.textContent = '☰';
  toggleButton.classList.add('navbar-toggle');
  navbar.insertBefore(toggleButton, menu);
  
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('visible');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('visible');
    }
  });
  