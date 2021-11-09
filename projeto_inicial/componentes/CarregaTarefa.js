import { criaData } from "./CriaData.js";
import { ordenaDatas, removeDatasRepetidas } from "./services/data.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";

    const datasUnicas = removeDatasRepetidas(tarefaCadastradas);

    ordenaDatas(datasUnicas);
    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));
    })
}