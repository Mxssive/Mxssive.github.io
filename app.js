// Hämtar burgermeny-knappen och navigationslänkarna från DOM
const burger = document.querySelector('.home-button');
const navLinks = document.querySelector('.nav-links');

// Lägger till event listener på hemknappen för att scrolla till toppen
document.getElementById('home-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,           // Scrollar till toppen av sidan
        behavior: 'smooth' // Använder mjuk scrollanimation
    });
});

// Java kod för hemknapp

// Lägger till event listeners på alla ankarlänkar som börjar med #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Förhindrar standardankarklickbeteende
        
        // Scrollar mjukt till målsektionen
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Använder mjuk scrollanimation
        });
        
        // Stänger mobilmenyn om den är öppen
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// kod för knappen Tours och Explore Tours