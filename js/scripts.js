document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: "smooth" });
    }

    let currentSection = 0;
    scrollToSection(currentSection);

    window.addEventListener("wheel", function(event) {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
        }

        scrollToSection(currentSection);
    });
});