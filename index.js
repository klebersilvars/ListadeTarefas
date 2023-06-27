let enviar = document.querySelector(".enviarTarefa");
let input = document.querySelector("#input");
let boxTarefas = document.querySelector(".tarefas");

let arrayTarefas = []

enviar.addEventListener('click', ()=> {
    let tarefa = input.value; //aqui estou pegando o valor do que é escrito no input e passando pra variavel tarefa.

    let li = document.createElement('li'); // aqui estou criando o meu elemento LI, que é de lista. dawd<1

    li.textContent = tarefa; // estou armazenando no meu LI, um texto que vai receber o que a minha variavel da tarefa está recebendo, o que é escrito no input

    arrayTarefas.push(tarefa)

    boxTarefas.appendChild(li) //aqui estou colocando o valor das tarefas como filho do meu elemento pai, que é o box tarefas criado no HTML.
    // to dizendo acima que o LI ficou dentro do box de tarefas.

})