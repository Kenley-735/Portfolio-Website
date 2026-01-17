// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Scroll reveal animation
const elements = document.querySelectorAll(".reveal");

const reveal = () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();
