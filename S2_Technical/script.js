document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const container = document.querySelector(".container");
    let currentBox = document.querySelector(".box"); // Reference to initial box

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            // Create a new box
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.style.backgroundColor = color; // Box is filled with color initially
            newBox.style.border = `5px solid ${color}`; // Set the border color

            // Append new box
            container.appendChild(newBox);

            // Move the current box up, and the new box down
            setTimeout(() => {
                if (currentBox) {
                    currentBox.style.top = "-400px"; // Move the current box up
                }
                newBox.style.top = "0px"; // Move the new box to the center
            }, 300); // Shorten the delay before the new box starts moving

            // Transition to only border after filling
            setTimeout(() => {
                newBox.style.backgroundColor = "transparent"; // Box background becomes transparent
            }, 500); // Adjust this based on when the box reaches its position

            // Remove the old box after the animation
            setTimeout(() => {
                if (currentBox) {
                    currentBox.remove();
                }
                currentBox = newBox; // Update reference to the new box
            }, 1500);
        });
    });
});
