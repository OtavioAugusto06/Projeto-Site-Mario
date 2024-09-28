const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")
const a  = document.querySelector("fale-conosco") 

function faleconosco(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "ease-in-out 1s"
    mascara.style.transition = "ease-in-out 1s"
}

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "ease-in-out 1s"
    mascara.style.transition = "ease-in-out 1s"
}

function sairdoformulario(){
form.style.left = "-300px"
form.style.transform = "translateX(0%)"
mascara.style.visibility = "hidden"
}