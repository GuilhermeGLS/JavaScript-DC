const FOOTER = document.getElementById('FOOTER')
// quando o cursor entra no lugar em especifico que chamara a função
FOOTER.addEventListener('mouseenter', Entrar)

// quando o cursor sai
FOOTER.addEventListener('mouseleave', Sair)

// quando o clilcar e soltar chamará esse evento
FOOTER.addEventListener('mouseup', cima)

// enquanto estiver seurando o click
FOOTER.addEventListener('mousedown', baixo)


FOOTER.addEventListener('mouseover', outro)


function Entrar(){
    FOOTER.style.display = "block"
    FOOTER.style.background = "yellow"
}

function Sair(){
    FOOTER.style.backgroundColor = "red"
}
function cima(){
    FOOTER.style.background = "green"
}
function baixo(){
    FOOTER.style.background = "violet"
}


