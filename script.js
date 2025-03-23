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

/* Animation de la navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
// Formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-message").style.display = "block";
    this.reset();
    setTimeout(() => {
        document.getElementById("form-message").style.display = "none";
    }, 3000);
});

// Bouton retour en haut
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Effet d'apparition progressive
const fadeInElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Changement de couleur de fond en fonction de l'heure
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
    document.body.style.backgroundColor = "#2c3e50";
    document.body.style.color = "white";
} else {
    document.body.style.backgroundColor = "#ecf0f1";
    document.body.style.color = "black";
}*/