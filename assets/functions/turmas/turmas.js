export const sidebarItems = [
    {
      href: "Trabalho/index.html",
      iconClass: "mdi mdi-cube menu-icon",
      menuTitle: "Dashboard",
    },
    {
      href: "pages/alunos/alunos.html",
      iconClass: "mdi mdi-account-check",
      menuTitle: "Alunos",
    },
    {
      href: "pages/matriculas/matriculas.html",
      iconClass: "mdi mdi-format-list-bulleted menu-icon",
      menuTitle: "Matriculas",
    },
    {
      href: "pages/disciplinas/disciplinas.html",
      iconClass: "mdi mdi-table-large menu-icon",
      menuTitle: "Disciplinas",
    },
    {
      href: "pages/turmas/turmas.html",
      iconClass: "mdi mdi-account-multiple-outline",
      menuTitle: "Turmas",
    },
    {
      href: "#",
      iconClass: "mdi mdi-lock menu-icon",
      menuTitle: "Despesas",
      subItems: [
        {
          href: "pages/despesas/contas-a-pagar.html",
          menuTitle: "Contas a pagar",
        },
        {
          href: "pages/despesas/contas-a-receber.html",
          menuTitle: "Contas a receber",
        },
      ],
    },
  ];