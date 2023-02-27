function verificaseochutepossuiumvalorvalido(chute) {
    const numero = +chute

    if (chuteforinvalido()(numero)) {
        elementochute.innerHTML += '<div>Valor Invalido</div>'
        return
    }

    if (numeroformaioroumenorqueopermitido(numero)) { 
        elementochute.innerHTML += `<div>Valor Invalido: Fale um número secreto que precisa estar entre ${menorvalor} e ${maiorvalor} </div>`
        return
    }
    if (numero === numerosecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2> 
        <h3>Numero Secreto era ${numerosecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `      
        

    } else if (numero > numerosecreto) {
        elementochute.innerHTML += `
        <div>O Número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementochute.innerHTML += `
        <div>O Número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    
    }
}

function chuteforinvalido() {
    return Number.isNaN
}

function numeroformaioroumenorqueopermitido(numero) {
    return numero > maiorvalor || numero < menorvalor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
