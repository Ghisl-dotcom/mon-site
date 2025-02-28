document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector("header");

    // Effet de survol du menu
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Effet de défilement du header
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.9)";
            header.style.transition = "background 0.3s";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Animation sur le bouton "Réserver"
    const btnReserve = document.querySelector(".btn-primary");
    btnReserve.addEventListener("mouseover", () => {
        btnReserve.style.transform = "scale(1.1)";
    });
    btnReserve.addEventListener("mouseout", () => {
        btnReserve.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('placesChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Standard', 'De Luxe', 'Premium'],
                datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ['#3498db', '#f1c40f', '#e74c3c']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    } else {
        console.error('Canvas non trouvé');
    }
});