/**
 * Personal Brand Website — Main JavaScript
 * Handles: navigation, mobile menu, scroll effects, form validation, animations.
 */

(function () {
  'use strict';

  // ——— Year in footer ———
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ——— Header scroll effect ———
  var header = document.getElementById('header');
  if (header) {
    function updateHeader() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // ——— Mobile menu ———
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isOpen);
      mobileMenu.classList.toggle('flex', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click (anchor links)
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ——— Smooth scroll for anchor links ———
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ——— Contact form: validation and submit (client-side only) ———
  var form = document.getElementById('contact-form');
  if (form) {
    var nameInput = form.querySelector('#name');
    var emailInput = form.querySelector('#email');
    var messageInput = form.querySelector('#message');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');

    function showError(el, msg) {
      if (!el) return;
      el.textContent = msg;
      el.classList.remove('hidden');
    }
    function hideError(el) {
      if (!el) return;
      el.textContent = '';
      el.classList.add('hidden');
    }
    function setInputError(input, hasError) {
      if (!input) return;
      if (hasError) input.classList.add('error');
      else input.classList.remove('error');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      hideError(nameError);
      hideError(emailError);
      hideError(messageError);
      setInputError(nameInput, false);
      setInputError(emailInput, false);
      setInputError(messageInput, false);

      if (!nameInput.value.trim()) {
        showError(nameError, 'Please enter your name.');
        setInputError(nameInput, true);
        valid = false;
      }
      if (!emailInput.value.trim()) {
        showError(emailError, 'Please enter your email.');
        setInputError(emailInput, true);
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address.');
        setInputError(emailInput, true);
        valid = false;
      }
      if (!messageInput.value.trim()) {
        showError(messageError, 'Please enter your message.');
        setInputError(messageError, true);
        valid = false;
      }

      if (!valid) return;

      // Placeholder: form is valid — hook your backend or mailto/Netlify etc. here
      // Example: form.action = 'https://formspree.io/f/xxx'; form.method = 'post'; form.submit();
      alert('Thanks for your message! I\'ll get back to you within 24 hours. (Connect this form to your backend or Formspree/Netlify.)');
      form.reset();
    });
  }

  // ——— Intersection Observer: fade-in project cards on scroll ———
  var observerOptions = { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, observerOptions);

  document.querySelectorAll('.project-card').forEach(function (card) {
    observer.observe(card);
  });
})();
