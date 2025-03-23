function loadGame(gameUrl) {
    document.getElementById('gameFrame').src = gameUrl;
}
    function loadGame(gameUrl) {
        let iframe = document.getElementById('gameFrame');
        if (iframe) {
            iframe.src = gameUrl; // Charge le mini-jeu dans l'iframe
        } else {
            console.error("L'iframe n'a pas été trouvé !");
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Récupérer tous les liens du menu
        const menuLinks = document.querySelectorAll('nav .menu a');
    
        // Ajouter un événement pour chaque lien
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Empêcher le comportement de lien par défaut
    
                // Cibler l'élément lié
                const targetId = link.getAttribute('href').substring(1); // Récupérer l'ID de la cible
                const targetElement = document.getElementById(targetId);
    
                // Définir la position de défilement
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    
        // Amélioration : ajouter un effet de transition sur le menu au survol
        menuLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.backgroundColor = '#575757';
            });
            link.addEventListener('mouseout', () => {
                link.style.backgroundColor = '';
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Récupérer le bouton
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
        // Fonction pour afficher/masquer le bouton selon la position du défilement
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.classList.add('show'); // Afficher le bouton
            } else {
                scrollToTopBtn.classList.remove('show'); // Cacher le bouton
            }
        });
    
        // Ajouter un événement au clic sur le bouton
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Effet de défilement fluide vers le haut
            });
        });
    });

        