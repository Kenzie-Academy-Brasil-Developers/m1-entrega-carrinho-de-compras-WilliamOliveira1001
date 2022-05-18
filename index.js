const listaProdutoPreco = document.querySelector(".listaProdutos")
const resultadoDaCompra = document.querySelector(".resultado")


function criarProdutos(produtos){
    const nome  = produtos.name
    const valor = produtos.price
 
    const li       = document.createElement("li")
    const tagNome  = document.createElement("p")
    const tagPreco = document.createElement("p")

    tagNome.innerText  = nome
    tagPreco.innerText = valor

    li.appendChild(tagNome)
    li.appendChild(tagPreco)

    return li
}


let soma = 0
function listarItens (listarItens){
    for(let i=0 ; i<listarItens.length ; i++){
        const itens = listarItens[i]
        const cardItens = criarProdutos(itens) //chamando minha funcao e passando minha array
        listaProdutoPreco.appendChild(cardItens) // colocando meu li dentro do meu ul e exibindo 
        soma += listarItens[i].price
    }
}
listarItens(dataBase)


const valor = document.createElement("p")
const somaTotal = soma
valor.innerText = somaTotal
resultadoDaCompra.appendChild(valor)


