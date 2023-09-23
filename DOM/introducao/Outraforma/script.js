
function clicar(){
    // validar se tem hidden
    const footer = document.querySelector('footer')
    const btn = document.querySelector('button')

    if (footer.className === "hidden"){
        footer.className = "show"
        btn.innerHTML = "Esconder footer"
    }else{
        footer.className = "hidden"
        btn.innerHTML = "Mostrar footer"
    }
}
