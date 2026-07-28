// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Back to top button
document.getElementById("topBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Live search
const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if(text.includes(value))
            card.style.display = "flex";
        else
            card.style.display = "none";

    });

});