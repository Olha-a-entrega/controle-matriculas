import { sidebarItems } from "../../functions/sidebar/sidebar.js";

export function createSidebar(sidebar) {
  const items = sidebarItems(sidebar);

  const sidebarContent = items
    .map((item) => {
      if (item.menuTitle !== "Despesas") {
        return ` <li class="nav-item">
  <a class="nav-link" href='${item.href}'>
    <span class="icon-bg"><i class="${item.iconClass}"></i></span>
    <span class="menu-title">${item.menuTitle}</span>
  </a>
</li>`;
      }

      return `<li class="nav-item">
<a
  class="nav-link"
  data-toggle="collapse"
  href="#auth"
  aria-expanded="false"
  aria-controls="auth"
>
  <span class="icon-bg"><i class="mdi mdi-lock menu-icon"></i></span>
  <span class="menu-title">Despesas</span>
  <i class="menu-arrow"></i>
</a>
<div class="collapse" id="auth">
  <ul class="nav flex-column sub-menu">
    <li class="nav-item">
      <a class="nav-link" href="../../pages/samples/blank-page.html">
        Contas a pagar
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../../pages/samples/login.html">
        Contas a receber
      </a>
    </li>
  </ul>
</div>
</li>`;
    })
    .join("");

  const sidebarHTML = `
      <nav class="sidebar-offcanvas" id="sidebar">
        <ul class="nav">
      ${sidebarContent}
        </ul>
      </nav>
    `;

  var sidebarDiv = document.querySelector(".sidebar");
  if (sidebarDiv) {
    sidebarDiv.innerHTML = sidebarHTML;
  }
}
