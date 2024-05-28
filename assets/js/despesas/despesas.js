import { createSidebar } from "../../js/sidebar/sidebar.js";
import { sidebarItems } from "../../functions/despesas/despesas.js";

window.onload = () => {
    createSidebar(sidebarItems);
};