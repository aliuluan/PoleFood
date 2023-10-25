// Récupérer tous les boutons de sauce et d'accompagnement
const sauceButtons = document.querySelectorAll('.sauce-button');
const sideButtons = document.querySelectorAll('.side-button');

// Fonction pour gérer le clic sur les boutons
function handleButtonClick(event, buttons) {
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

// Ajouter des gestionnaires de clic pour les boutons de sauce et d'accompagnement
sauceButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        handleButtonClick(event, sauceButtons);
    });
});

sideButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        handleButtonClick(event, sideButtons);
    });
});
