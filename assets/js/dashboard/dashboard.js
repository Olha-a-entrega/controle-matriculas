import { createSidebar } from "../../js/sidebar/sidebar.js";
import { sidebarItems } from "../../functions/dashboard/dashboard.js";

window.onload = () => {
  createSidebar(sidebarItems);
};
