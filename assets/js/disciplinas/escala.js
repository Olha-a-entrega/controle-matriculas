import { scales, sidebarItems } from "../../functions/disciplinas/escalas.js";
import { createSidebar } from "../../js/sidebar/sidebar.js";

const urlParams = new URLSearchParams(window.location.search);
const discipline = urlParams.get("disciplina");
const teacher = urlParams.get("professor");

function data(key) {
  const currentData = {
    portugues: scales[key],
    historia: scales[key],
    geografia: scales[key],
    matematica: scales[key],
  };

  return currentData[key];
}

function createTable() {
  const table = document.createElement("table");
  table.classList.add("table");

  const header = document.createElement("thead");
  header.innerHTML = `
          <tr>
            <th>Turma</th>
            <th>Turno</th>
            <th>Quantidade de Alunos</th>
            <th>Dia da Semana</th>
            <th>Horário</th>
            <th>Status</th>
       
          </tr>
        `;
  table.appendChild(header);

  const body = document.createElement("tbody");
  data(discipline).forEach(function (item) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.turma}</td>
            <td>${item.turno}</td>
            <td>${item.quantidade_alunos}</td>
            <td>${item.dia_semana}</td>
            <td>${item.horario}</td>
            <td><label class="badge badge-${
              item.status === "Incompleta" ? "danger" : "success"
            }">${item.status}</label></td>
            
          `;
    body.appendChild(row);
  });
  table.appendChild(body);

  document.getElementById("table-container").appendChild(table);
}

function setDisciplineName() {
  const disciplineDiv = document.querySelector(".discipline-name");

  const h2Element = document.createElement("h2");
  h2Element.classList.add("text-dark", "font-weight-bold", "mb-2", "text-capitalize");
  h2Element.textContent = discipline;

  disciplineDiv.appendChild(h2Element);
}

function setTeacherName() {
  const teacherDiv = document.querySelector(".teacher-name");

  const teacherName = document.createElement("h4");
  teacherName.classList.add("card-title");
  teacherName.textContent = teacher;

  teacherDiv.appendChild(teacherName);
}

window.onload = () => {
  createTable();
  setDisciplineName();
  setTeacherName();
  createSidebar(sidebarItems);
};
