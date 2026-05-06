let lista_nomes = ["Vinicius", "Hector", "Carlos"]

const nome = document.getElementById("nome")
const botaoAdicionarInicio = document.getElementById("adicionarInicio")
const botaoAdicionarFinal = document.getElementById("adicionarFinal")
const botaoRemoverInicio = document.getElementById("removerInicio")
const botaoRemoverFinal = document.getElementById("removerFinal")
let paragrafo = document.getElementById("paragrafo")
const botaoMostrarNomes = document.getElementById("mostrarMais5Letras")

function renderizar(){
    for(let item of lista_nomes){
        let elemento = document.createElement('li')
        const lista_pagina = document.getElementById("lista")
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
        contarletras()
    }
}

function contarletras(){
    let controle = 0
    for(let item of lista_nomes){
        if(item.length > 5){
            controle++
            paragrafo.innerText = `Nomes com mais de 5 letras: ${controle}`
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    renderizar()
    contarletras()
})

botaoAdicionarInicio.addEventListener("click", () => {
    lista_nomes.unshift(nome.value)
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""
    renderizar()
})

botaoAdicionarFinal.addEventListener("click", () => {
    lista_nomes.push(nome.value)
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""
    renderizar()
})

botaoRemoverInicio.addEventListener("click", () => {
    lista_nomes.shift()
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""
    renderizar()
})

botaoRemoverFinal.addEventListener("click", () => {
    lista_nomes.pop()
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""
    renderizar()
})

botaoMostrarNomes.addEventListener("click", () => {
    contarletras()
})