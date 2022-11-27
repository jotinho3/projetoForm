if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa pagina');
    window.location.href = 'login.html'
}

function sair() {
    localStorage.removeItem('token')

    window.location.href = 'login.html'
}