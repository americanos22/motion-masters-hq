/**
 * Digital Work Theme JavaScript
 */
(function() {
    'use strict';

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            this.querySelector('.menu-icon').classList.toggle('hidden');
            this.querySelector('.close-icon').classList.toggle('hidden');
        });
    }

    // Announcement Bar Close
    const announcementClose = document.querySelector('.announcement-close');
    const announcementBar = document.getElementById('announcement-bar');
    if (announcementClose && announcementBar) {
        announcementClose.addEventListener('click', function() {
            announcementBar.style.display = 'none';
            sessionStorage.setItem('announcementClosed', 'true');
        });
        if (sessionStorage.getItem('announcementClosed')) {
            announcementBar.style.display = 'none';
        }
    }

    // Search Overlay
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.remove('hidden');
            searchOverlay.querySelector('input').focus();
        });
        searchOverlay.querySelector('.search-overlay-backdrop').addEventListener('click', function() {
            searchOverlay.classList.add('hidden');
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') searchOverlay.classList.add('hidden');
        });
    }

    // Copy Promo Code
    document.querySelectorAll('.copy-code').forEach(function(btn) {
        btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.code);
            alert('Code copied!');
        });
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const msg = document.querySelector('.newsletter-message');
            msg.textContent = 'Thank you for subscribing!';
            msg.classList.remove('hidden');
            this.reset();
        });
    }
})();
