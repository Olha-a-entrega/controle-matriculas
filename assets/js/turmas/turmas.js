import { createSidebar } from "../../js/sidebar/sidebar.js";
import { sidebarItems } from "../../functions/turmas/turmas.js";

window.onload = () => {
  createSidebar(sidebarItems);
};

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os botões de remover turma
  var removeTurmaButtons = document.querySelectorAll('.bg-transparent.border-0[title="Remover turma"]');

  // Adiciona um evento de clique a cada botão
  removeTurmaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Obtém a linha da tabela que contém o botão clicado
      var row = this.closest('tr');
      
      // Remove a linha da tabela
      row.parentNode.removeChild(row);
    });
  });
});