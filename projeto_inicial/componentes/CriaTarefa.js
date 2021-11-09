import { carregaTarefa } from "./CarregaTarefa.js";
import BotaoConclui from "./ConcluiTarefa.js";
import BotaoDeleta from "./DeletaTarefa.js";

export const handleNovoItem = (evento) => {
    evento.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    //Input de texto da tarefa.
    const input = document.querySelector('[data-form-input]');
    const valor = input.value ;

    //Input de texto da data.
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value);
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY');

    const concluida = false;
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefaAtualizadas = [...tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefaAtualizadas));

    input.value = " ";

    carregaTarefa();
}

//Método responsável por criar as tarefas.
export const Tarefa = ({valor, horario, concluida}, id) => {
    //Tarefa exada na lista.
    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${valor + " * " + horario}</p>`;

    if(concluida){
        tarefa.classList.add('done');
    }
    tarefa.classList.add('task');
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;
}
