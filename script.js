// =====================================
// --- script.js (POORA REPLACE KAREIN) ---
// =====================================

// 1. Navbar Toggle (Hamburger Menu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Hamburger icon par click hone par menu ko show/hide karta hai
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Icon ko X mein badal deta hai
    navbar.classList.toggle('active'); // Navbar ko active class deta hai (CSS se dikhta hai)
};


// 2. Scroll Section Active Link aur Header Fix
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Section start point
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Navbar links se 'active' class hatakar sirf current section ke link ko deta hai
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Header ko sticky aur shadow deta hai jab scroll ho
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Navbar aur icon ko band karta hai jab scroll karte hain (mobile view mein)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// 3. Scroll Reveal (Animation)
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

// Animations ki jagah aur direction set ki
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-img', { origin: 'right' });


// 4. Typed JS (Multiple Text Typewriter Effect)
const typed = new Typed('.multiple-text', {
    strings: ['Python Developer', 'ML Enthusiast', 'Urdu Documenter'], // Aapke roles
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});