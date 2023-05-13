function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    //id da caixa de texto ano de nascimento
    var fano = document.getElementById('txtano')
    //resultado
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'youngboy.jpg')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'teenboy.jpg')
            } else if (idade < 50) {
                // Jovem
                img.setAttribute('src', 'youngman.jpg')
            } else {
                // Senior
                img.setAttribute('src', 'seniorman.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'youngirl.jpg')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'teengirl.jpg')
            } else if (idade < 50) {
                // Jovem
                img.setAttribute('src', 'youngwoman.jpg')
            } else {
                // Senior
                img.setAttribute('src', 'seniorwoman.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //res.innerHTML = `Idade calculada ${idade}`
        res.appendChild(img)
    }
}