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
    var retourToggle = document.getElementById("retour");
    var retourTexte = document.querySelector(".texte-retour");
    var livraisonToggle = document.getElementById("livraison");
    var livraisonTexte = document.querySelector(".texte-livraison");

    var codeName = "CHOMAGE";
    var promoUsed = false; // Variable de suivi pour le code promo

    retourToggle.addEventListener("click", function () {
        retourTexte.classList.toggle("active");
        if (retourTexte.classList.contains("active")) {
            retourToggle.innerHTML = "Politique de retour -";
        } else {
            retourToggle.innerHTML = "Politique de retour +";
        }
    });

    livraisonToggle.addEventListener("click", function () {
        livraisonTexte.classList.toggle("active");
        if (livraisonTexte.classList.contains("active")) {
            livraisonToggle.innerHTML = "Options de livraison -";
        } else {
            livraisonToggle.innerHTML = "Options de livraison +";
        }
    });

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
        applyPromo();
    });

    promoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Empêche l'envoi du formulaire par défaut
            applyPromo();
        }
    });

    function applyPromo() {
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
    }
});
