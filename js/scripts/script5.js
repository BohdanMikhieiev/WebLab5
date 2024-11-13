let selectedCell = null;

function showForm(cell) {
    selectedCell = cell;
    console.log(selectedCell);
    document.getElementById("cssFormContainer").style.display = "block";
}

function applyCSS() {
    const property = document.getElementById("cssProperty").value;
    const value = document.getElementById("cssValue").value;

    if (selectedCell && property && value) {
        selectedCell.style[property] = value;

        const cellId = selectedCell.id;
        let cssInstructions = JSON.parse(localStorage.getItem(cellId)) || {};
        cssInstructions[property] = value;
        localStorage.setItem(cellId, JSON.stringify(cssInstructions));
    }
}

function clearCSS() {
    if (selectedCell) {
        const cellId = selectedCell.id;
        localStorage.removeItem(cellId);
        selectedCell.removeAttribute("style");
    }
}

function loadSavedCSS() {
    document.querySelectorAll('.cell-with-border').forEach(cell => {
        const cellId = cell.id;
        const cssInstructions = JSON.parse(localStorage.getItem(cellId));
        if (cssInstructions) {
            for (const property in cssInstructions) {
                cell.style[property] = cssInstructions[property];
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", loadSavedCSS);