const accordionCard = document.querySelectorAll(".accordion__card");

accordionCard.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const accordionAtivo = document.querySelector(".active");
        if (accordionAtivo && accordionAtivo !== accordion) {
            accordionAtivo.classList.toggle("active");  
        }
        
        accordion.classList.toggle("active");

    });
})