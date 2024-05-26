import { sidebarItems } from "../../functions/matriculas/matriculas.js";
import { createSidebar } from "../sidebar/sidebar.js";

window.onload = () => {
  createSidebar(sidebarItems);
};
