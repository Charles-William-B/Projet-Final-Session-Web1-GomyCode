// Sélection des éléments nécessaires
const articles = document.querySelectorAll('.article');
const totalElement = document.getElementById('total');

// Initialisation du total
let total = 0;

// Fonction pour mettre à jour le total
function updateTotal() {
    totalElement.textContent = total;
}

// Ajout d'événements sur chaque article
articles.forEach(article => {
    const prix = parseInt(article.dataset.prix);
    
    // Gestion du clic sur le bouton "plus"
    const plusButton = article.querySelector('.plus');
    const minusButton = article.querySelector('.minus');
    const quantiteSpan = article.querySelector('.quantite');
    
    plusButton.addEventListener('click', () => {
        let quantite = parseInt(quantiteSpan.textContent);
        quantite++;
        quantiteSpan.textContent = quantite;
        total += prix;
        updateTotal();
    });
    
    // Gestion du clic sur le bouton "moins"
    minusButton.addEventListener('click', () => {
        let quantite = parseInt(quantiteSpan.textContent);
        if (quantite > 1) {
            quantite--;
            quantiteSpan.textContent = quantite;
            total -= prix;
            updateTotal();
        }
    });
    
    // Gestion du clic sur le bouton "cœur"
    const heartButton = article.querySelector('.heart');
    heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('favori');
        if (heartButton.classList.contains('favori')) {
            heartButton.querySelector('img').src = './Asset/logo/coeur rouge.png'; // Image cœur rempli
        } else {
            heartButton.querySelector('img').src = './Asset/logo/coeur gris.png'; // Image cœur vide
        }
    });

    // Gestion du clic sur le bouton "supprimer"
    const supprimerButton = article.querySelector('.supprimer');
    supprimerButton.addEventListener('click', () => {
        article.remove();
        // Réduire le prix total basé sur la quantité
        const quantite = parseInt(quantiteSpan.textContent);
        total -= prix * quantite;
        updateTotal();
    });
});
