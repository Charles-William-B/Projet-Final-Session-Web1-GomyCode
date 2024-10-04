document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.article');
    const totalElement = document.getElementById('total');

    articles.forEach(article => {
        const minusButton = article.querySelector('.minus');
        const plusButton = article.querySelector('.plus');
        const supprimerButton = article.querySelector('.supprimer');
        const heartButton = article.querySelector('.heart');
        const quantiteElement = article.querySelector('.quantite');
        const prixElement = article.querySelector('.prix');
        
        let quantite = parseInt(quantiteElement.textContent);
        const prix = parseFloat(prixElement.textContent);

        // Fonction pour mettre à jour le total
        const updateTotal = () => {
            let total = 0;
            articles.forEach(a => {
                const qty = parseInt(a.querySelector('.quantite').textContent);
                const price = parseFloat(a.dataset.prix);
                total += qty * price;
            });
            totalElement.textContent = total.toFixed(2);
        };

        // Ajuster la quantité
        plusButton.addEventListener('click', () => {
            quantite++;
            quantiteElement.textContent = quantite;
            updateTotal();
        });

        minusButton.addEventListener('click', () => {
            if (quantite > 1) {
                quantite--;
                quantiteElement.textContent = quantite;
                updateTotal();
            }
        });

        // Supprimer l'article
        supprimerButton.addEventListener('click', () => {
            article.remove();
            updateTotal();
        });

        // Aimer l'article
        heartButton.addEventListener('click', () => {
            heartButton.classList.toggle('aimé');
        });
    });

    // Initialiser le total
    updateTotal();
});