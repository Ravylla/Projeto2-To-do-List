const button = document.querySelector('.button-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListadeItens = []


function adicionarTarefa(){
minhaListadeItens.push(input.value)

input.value = ''

mostrarTarefas()
}


function mostrarTarefas(){

    let novaLi = ''

    minhaListadeItens.forEach((tarefa, index) => {
        novaLi = novaLi + `
    <li>
        <p>${tarefa}</p>
        <button onclick="deletarItem(${index})">Delete</button>
    </li>
        `
    })
    listaCompleta.innerHTML = novaLi
}

function deletarItem (posicao){
minhaListadeItens.splice(posicao, 1)
mostrarTarefas()
}


button.addEventListener('click', adicionarTarefa)