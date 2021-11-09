import { handleNovoItem } from "./componentes/CriaTarefa.js";
import { carregaTarefa } from "./componentes/CarregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();