import { sidebarItems } from "../../functions/disciplinas/escalas.js";
import { createSidebar } from "../../js/sidebar/sidebar.js";

window.onload = () => {
  createSidebar(sidebarItems);
};
