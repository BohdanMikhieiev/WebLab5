function changeBorderColor() {
    const selectedColor = document.getElementById("colorInput").value;

    const blocks = document.querySelectorAll(".cell-with-border");

    blocks.forEach(block => {
        block.style.borderColor = selectedColor;
    });

    localStorage.setItem("borderColor", selectedColor);
}

function applySavedBorderColor() {
    const savedColor = localStorage.getItem("borderColor");

    if (savedColor) {
        const blocks = document.querySelectorAll(".cell-with-border");
        blocks.forEach(block => {
            block.style.borderColor = savedColor;
        });

        document.getElementById("colorInput").value = savedColor;
    }
}

document.addEventListener("DOMContentLoaded", applySavedBorderColor);
