document.addEventListener("DOMContentLoaded", function () {
    var supprimerButtons = document.querySelectorAll(".suppr");
    var quantiteInputs = document.querySelectorAll(".quantite");
    var promoInput = document.getElementById("code");
    var applyPromoButton = document.getElementById("applyPromoButton");
    var promoInfo = document.querySelector(".promoInfo");
    var totalPrixElement = document.querySelector(".totalPrix");
    var produits = document.querySelectorAll(".descFood");
    var totalProduitsElement = document.querySelector(".Total2");
    var images = document.querySelectorAll(".food");

    var codeName = "CHOMAGE";

    function updateTotal() {
        var total = 0;
        for (var i = 0; i < produits.length; i++) {
            var produit = produits[i];
            var quantite = parseInt(quantiteInputs[i].value);
            var prixUnitaire = parseFloat(produit.getAttribute("data-prix"));
            total += quantite * prixUnitaire;
        }
        totalProduitsElement.textContent = "Total produits : " + total + "€";
        totalPrixElement.textContent = "Total : " + total + "€";
    }

    quantiteInputs.forEach(function (input) {
        input.addEventListener("change", updateTotal);
    });

    supprimerButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var container = button.parentElement;
            container.remove();
            images[index].remove();
            updateTotal();
        });
    });

    applyPromoButton.addEventListener("click", function () {
        var codePromo = promoInput.value;
        if (codePromo === codeName) {
            var total = parseFloat(totalPrixElement.textContent.replace("Total : ", "").replace("€", ""));
            var reduction = 5; // Réduction de 5€ (personnalisez selon vos besoins)
            total -= reduction;
            totalPrixElement.textContent = "Total : " + total + "€";
            promoInfo.textContent = "Réduction de " + reduction + "€ appliquée grâce au code promo " + codeName;
        } else {
            promoInfo.textContent = "Code promo invalide. Aucune réduction appliquée.";
        }
        promoInput.value = ""; // Effacez le champ du code promo
    });
});
// Ajouter un événement de clic sur le bouton "Supprimer" pour la suppression d'articles
