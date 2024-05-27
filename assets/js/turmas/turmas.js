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
      // Pergunta ao usuário se ele tem certeza de que deseja remover a turma
      var confirmacao = confirm("Tem certeza de que deseja remover esta turma?");
      
      // Se o usuário confirmar, remove a linha da tabela
      if (confirmacao) {
        var row = this.closest('tr');
        row.parentNode.removeChild(row);
      }
    });
  });
});