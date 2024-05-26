import { sidebarItems } from "../../functions/disciplinas/escalas.js";
import { createSidebar } from "../../js/sidebar/sidebar.js";

document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.getElementById("english");
  var statusLabel = document.getElementById("englishStatusLabel");
  var teacherName = document.getElementById("teacherName");

  selectElement.addEventListener("change", function () {
    var selectedOption = selectElement.value;

    if (selectedOption !== "") {
      statusLabel.textContent = "Aguardando confirmação de atribuição";
      teacherName.textContent = selectedOption;
      statusLabel.classList.remove("badge-danger");
      statusLabel.classList.add("badge-warning");
    } else {
      statusLabel.textContent = "Não atribuída";
      statusLabel.classList.remove("badge-warning");
      statusLabel.classList.add("badge-danger");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.getElementById("biology");
  var statusLabel = document.getElementById("biologyStatusLabel");
  var teacherName = document.getElementById("biologyTeacherName");

  selectElement.addEventListener("change", function () {
    var selected = selectElement.value;

    if (selected !== "") {
      statusLabel.textContent = "Aguardando confirmação de atribuição";
      teacherName.textContent = selected;
      statusLabel.classList.remove("badge-danger");
      statusLabel.classList.add("badge-warning");
    } else {
      statusLabel.textContent = "Não atribuída";
      statusLabel.classList.remove("badge-warning");
      statusLabel.classList.add("badge-danger");
    }
  });
});

window.onload = () => {
  createSidebar(sidebarItems);
};
