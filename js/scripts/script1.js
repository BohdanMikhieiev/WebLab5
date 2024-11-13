window.addEventListener('load',  function() {
    let cell1Content = document.querySelector('.cell1').innerHTML;
    let cell4Content = document.querySelector('.cell4').innerHTML;

    document.querySelector('.cell1').innerHTML = cell4Content;
    document.querySelector('.cell4').innerHTML = cell1Content;
});