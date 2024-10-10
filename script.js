const listaTarefas = document.getElementById("listaTarefas");
const inputNovaTarefa = document.getElementById("novaTarefa");

function adicionarTarefa() {
  const novaTarefaTexto = inputNovaTarefa.value.trim();

  if (novaTarefaTexto !== "") {
    const novaTarefaLi = document.createElement("li");
    novaTarefaLi.innerText = novaTarefaTexto;

    novaTarefaLi.addEventListener("click", function() {
      novaTarefaLi.classList.toggle("completed");
    });

    listaTarefas.appendChild(novaTarefaLi);
    inputNovaTarefa.value = "";
  }
}

function limparLista() {
  listaTarefas.innerHTML = "";
}