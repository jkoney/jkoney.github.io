function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const customLinks = document.querySelectorAll('.custom-link');
    const customUnderlines = document.querySelectorAll('.custom-underline');

    // Ajouter ou retirer la classe "dark-mode" du corps
    body.classList.toggle('dark-mode');

    // Si le corps a la classe "dark-mode", appliquer les styles sombres
    if (body.classList.contains('dark-mode')) {
        navbar.classList.add('dark-mode');
        navLinks.forEach(link => {
            link.classList.add('dark-mode');
        });
        customLinks.forEach(link => {
            link.classList.add('dark-mode');
        });
        customUnderlines.forEach(underline => {
            underline.classList.add('dark-mode');
        });
    } else {
        // Sinon, rétablir les styles par défaut
        navbar.classList.remove('dark-mode');
        navLinks.forEach(link => {
            link.classList.remove('dark-mode');
        });
        customLinks.forEach(link => {
            link.classList.remove('dark-mode');
        });
        customUnderlines.forEach(underline => {
            underline.classList.remove('dark-mode');
        });
    }
}

// Ajouter un gestionnaire d'événements pour le bouton de basculement de mode sombre
const darkModeButton = document.querySelector('.dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);
