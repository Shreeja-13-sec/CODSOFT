document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});