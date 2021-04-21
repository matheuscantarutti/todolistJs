import BotaoConclui from "../manipulandoDom/componentes/concluiTarefa";
import BotaoDeleta from "../manipulandoDom/componentes/deletaTarefa";

	const criarTarefa = (evento) => {
	evento.preventDefault();

	const lista = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]");
	const valor = input.value;

	const tarefa = document.createElement("li");
	tarefa.classList.add("task");
	const conteudo = `<p class="content">${valor}</p>`;

	tarefa.innerHTML = conteudo;

	tarefa.appendChild(BotaoConclui());
	tarefa.appendChild(BotaoDeleta());
	lista.appendChild(tarefa);

	input.value = "";
};

const novaTarefa = document.querySelector("[data-form-btn]");
novaTarefa.addEventListener("click", criarTarefa);
