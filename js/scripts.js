function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function aceitarCookies() {
    // Verifica se o usuário já aceitou os cookies
    if (!getCookie('cookiesAceitos')) {
        // Define um cookie para indicar que os cookies foram aceitos (válido por 365 dias)
        setCookie('cookiesAceitos', 'true', 365);
        
        // Remove a div de consentimento de cookies
        var cookieConsent = document.getElementById('cookieConsent');
        cookieConsent.parentNode.removeChild(cookieConsent);
    }
}

// Verifica se o cookie de aceitação de cookies já existe
if (getCookie('cookiesAceitos')) {
    // Se existir, remove a div de consentimento de cookies
    var cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.parentNode.removeChild(cookieConsent);
}

// MENU
// Selecionando o elemento de toggle pelo ID
const toggle = document.getElementById('toggle');

// Adicionando um evento de clique ao elemento de toggle
toggle.addEventListener('click', function() {
    // Selecionando o menu de navegação
    const menu = document.querySelector('nav');
    
    // Alternando a exibição do menu (mostrando/ocultando)
    menu.classList.toggle('show');
});