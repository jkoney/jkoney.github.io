// Sélectionnez le bouton ou l'élément qui déclenchera le changement de mode
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Fonction pour basculer entre le mode sombre et le mode clair
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector("h2").style="white"
}

// Écoutez l'événement de clic sur le bouton et appelez la fonction toggleDarkMode()
darkModeToggle.addEventListener('click', toggleDarkMode);
