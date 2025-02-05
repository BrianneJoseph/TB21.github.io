document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.querySelector(".box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            // Move box down and change color
            box.style.transform = "translateY(150px)";
            setTimeout(() => {
                box.style.backgroundColor = color;
            }, 500);

            // Reset position after animation
            setTimeout(() => {
                box.style.transform = "translateY(0)";
            }, 1000);
        });
    });
});
