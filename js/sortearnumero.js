const menorvalor = 1
const maiorvalor = 1000
const numerosecreto =  gerarnumeroaleatorio()
const elementomenorvalor = document.getElementById('menor_valor')
const elementomaiorvalor = document.getElementById('maior_valor')

function gerarnumeroaleatorio() {
    return parseInt(Math.random() * maiorvalor + 1)
}

console.log(numerosecreto)

elementomenorvalor.innerHTML = menorvalor
elementomaiorvalor.innerHTML = maiorvalor