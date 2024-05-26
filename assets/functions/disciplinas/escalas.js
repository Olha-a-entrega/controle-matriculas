const weekDays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
];

const morningTimes = [
  "07:00 - 07:50",
  "07:50 - 08:40",
  "08:40 - 09:30",
  "09:30 - 10:20",
  "10:20 - 11:10",
  "11:10 - 12:00",
];
const afternoonTimes = [
  "12:30 - 13:20",
  "13:20 - 14:10",
  "14:10 - 15:00",
  "15:20 - 16:10",
  "16:10 - 17:00",
  "17:00 - 17:50",
];

const classes = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C"];

function calcQuantityStudents() {
  return Math.floor(Math.random() * 16) + 20;
}

function getStatus(quantity) {
  return quantity === 35 ? "Completa" : "Incompleta";
}

function randomTimes(period, times) {
  return classes.map((turma, index) => {
    const studentsQuantity = calcQuantityStudents();

    return {
      turma: turma,
      turno: period,
      quantidade_alunos: studentsQuantity,
      dia_semana: weekDays[index % weekDays.length],
      horario: times[index % times.length],
      status: getStatus(studentsQuantity),
    };
  });
}

export const scales = {
  portugues: randomTimes("Tarde", afternoonTimes),
  historia: randomTimes("Manhã", morningTimes),
  geografia: randomTimes("Manhã", morningTimes),
  matematica: randomTimes("Tarde", afternoonTimes),
};

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
    href: "./disciplinas.html",
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
        href: "../../pages/samples/blank-page.html",
        menuTitle: "Contas a pagar",
      },
      {
        href: "../../pages/samples/login.html",
        menuTitle: "Contas a receber",
      },
    ],
  },
];
