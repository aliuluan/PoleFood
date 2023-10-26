document.addEventListener("DOMContentLoaded", function () {
    var supprimerButtons = document.querySelectorAll(".suppr");

    supprimerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var container = button.parentElement;
            container.remove();
            var image = container.querySelector(".food"); // Sélectionne l'image à partir de la classe "food"

                image.remove(); // Supprime l'image
            
        });
    });
});
