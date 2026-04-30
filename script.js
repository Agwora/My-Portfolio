// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Nav scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu function (global)
  window.closeMobile = function() {
    if (hamburger && mobileMenu) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  // Stagger animations for grids
  document.querySelectorAll('.hobbies-grid, .toolkit-grid').forEach(grid => {
    const children = grid.querySelectorAll('.hobby-card, .toolkit-card');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});