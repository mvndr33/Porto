document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initMobileMenu();
    initScrollReveal();
  });
  
  // Custom Cursor
  function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
  
    if (!cursor) return;
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.addEventListener('mousedown', () => {
      cursor.style.width = '15px';
      cursor.style.height = '15px';
    });
  
    document.addEventListener('mouseup', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
    });
  
    // Hover effect for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
  
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.opacity = '0.5';
      });
  
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.opacity = '0.7';
      });
    });
  }
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (!menuToggle || !navLinks) return;
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
  
      if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'var(--color-dark)';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        navLinks.style.borderBottom = '1px solid var(--color-border)';
      } else {
        navLinks.style.display = '';
      }
    });
  
    // Close mobile menu when clicking a nav link
    const navLinkItems = document.querySelectorAll('.nav-link');
  
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle.classList.remove('active');
          navLinks.style.display = '';
        }
      });
    });
  }
  
  // Scroll Reveal Animation
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section-header, .skill-category, .project-card, .about-content, .contact-container');
  
    revealElements.forEach(el => {
      el.classList.add('reveal');
    });
  
    function checkReveal() {
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    }
  
    // Initial check
    checkReveal();
  
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
  }
  
  // Form submission handler
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  });
  
  function handleFormSubmit(e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    // We would typically send this data to a server
    // For now, we'll just log it and show a success message
    console.log('Form Data:', { name, email, message });
  
    // Show success message
    const form = e.target;
    form.innerHTML = `
      <div class="success-message">
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
        <button type="button" class="btn primary-btn" onclick="location.reload()">Send Another Message</button>
      </div>
    `;
  }
  
  // Handle smooth scrolling for navigation links
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          const offsetTop = targetSection.offsetTop;
  
          window.scrollTo({
            top: offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
  });
  