let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    lista.innerHTML += `
      <li>
        <input type="checkbox" onchange="toggle(${index})" ${tarefa.concluida ? "checked" : ""}>
        ${tarefa.texto}
        <button onclick="remover(${index})">X</button>
      </li>
    `;
  });
}

function adicionar() {
  const texto = document.getElementById("tarefa").value;

  if (!texto) return;

  tarefas.push({ texto, concluida: false });
  salvar();
  renderizar();
}

function toggle(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  salvar();
}

function remover(index) {
  tarefas.splice(index, 1);
  salvar();
  renderizar();
}

renderizar();