document.addEventListener("DOMContentLoaded", function () {
    var supprimerButtons = document.querySelectorAll(".suppr");

    supprimerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var container = button.parentElement;
            container.remove();
            var image_1 = document.getElementById('image1');
            image_1.parentNode.removeChild(image_1);
        });
    });
});
