import { Tarefa } from "./CriaTarefa.js";

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li');
    const conteudo = `<p class="data" style="color: #F6F1D1">${dataMoment.format('DD/MM/YYYY')}</p>`;

    dataTopo.innerHTML = conteudo;

    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/M/YYYY')

        const diff = dataMoment.diff(dia);
        if (diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa, id));
        }
    }));

    return dataTopo;
}