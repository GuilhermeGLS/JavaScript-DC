
function clicar(){
    // validar se tem hidden
    const footer = document.querySelector('footer')
    const btn = document.querySelector('button')

    if (footer.className === "hidden"){
        footer.className = "show"
    }else{
        footer.className = "hidden"
        btn.innerHTML = "Mostrar footer"
    }
}
