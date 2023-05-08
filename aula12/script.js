function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'bomdia.jpg'
    document.body.style.background = 'rgb(249, 169, 72)'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'boatarde.jpg'
    document.body.style.background = 'rgb(184, 63, 72)'
} else {
    //BOA NOITE!
    img.src = 'boanoite.jpg'
    document.body.style.background = 'rgb(78, 105, 112)'
}
}