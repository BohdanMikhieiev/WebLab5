window.addEventListener('load',  function() {
    let side = 10;

    function calculatePentagonArea(side) {
        return (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2);
    }

    let area = calculatePentagonArea(side);

    let areaContainer = document.querySelector('.area-container');
    areaContainer.innerHTML = `<p>Area of pentagon with side ${side} equals ${area.toFixed(2)}.</p>`;
});