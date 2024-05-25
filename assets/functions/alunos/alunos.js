export const sidebarItems = [
    {
    href: "../../index.html",
    iconClass: "mdi mdi-cube menu-icon",
    menuTitle: "Dashboard",
    },
    {
    href: "../alunos/alunos.html",
    iconClass: "mdi mdi-account-check",
    menuTitle: "Alunos",
    },
    {
    href: "../matriculas/matriculas.html",
    iconClass: "mdi mdi-format-list-bulleted menu-icon",
    menuTitle: "Matriculas",
    },
    {
    href: "../disciplinas/disciplinas.html",
    iconClass: "mdi mdi-table-large menu-icon",
    menuTitle: "Disciplinas",
    },
    {
    href: "../turmas/turmas.html",
    iconClass: "mdi mdi-account-multiple-outline",
    menuTitle: "Turmas",
    },
    {
    href: "#",
    iconClass: "mdi mdi-lock menu-icon",
    menuTitle: "Despesas",
    subItems: [
        {
        href: "../despesas/contas-a-pagar.html",
        menuTitle: "Contas a pagar",
        },
        {
        href: "../despesas/contas-a-receber.html",
        menuTitle: "Contas a receber",
        },
    ],
    },
];
