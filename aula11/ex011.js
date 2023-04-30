var idade = 12
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Nao vota')
}
else if (idade < 18 || idade > 65){
    console.log('O voto Opcional')
}
else {
    console.log('O voto obrigatorio')
}