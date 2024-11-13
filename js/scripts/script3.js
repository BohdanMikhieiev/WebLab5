function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999; path=/";
}

function reverseNumber() {
    let number = document.getElementById("numberInput").value;

    if (number === "") {
        alert("Please, enter a valid number");
        return;
    }

    let reversedNumber = number.split('').reverse().join('');
    setCookie("reversedNumber", reversedNumber, 1);

    alert("Reversed number: " + reversedNumber + ". Data is saved into cookies.");
}

function checkAndDisplayCookie() {
    const savedData = getCookie("reversedNumber");

    if (savedData) {
        alert("saved data in cookies: " + savedData + ". After pressing 'OK' data will be deleted.");
        eraseCookie("reversedNumber");
        alert("Data is removed from cookies. Press 'OK to reload the page.");
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkAndDisplayCookie();
});