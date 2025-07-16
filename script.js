const ramos = [
  { id: "fund_tur", nombre: "Fundamentos de la industria turística", periodo: 1 },
  { id: "destinos_nac", nombre: "Destinos y atractivos turísticos nacionales", periodo: 1 },
  { id: "tics1", nombre: "TICS para el turismo I", periodo: 1 },
  { id: "hab_num", nombre: "Habilidades numéricas", periodo: 1 },
  { id: "com_bas", nombre: "Habilidades básicas de comunicación", periodo: 1 },
  { id: "ing_bas", nombre: "Inglés básico", periodo: 1 },
  { id: "port1", nombre: "Proceso de portafolio 1", periodo: 1 },

  { id: "prog", nombre: "Programación turística", periodo: 2 },
  { id: "guiado", nombre: "Técnicas de guiado", periodo: 2 },
  { id: "dest_mund", nombre: "Destinos patrimoniales mundiales", periodo: 2 },
  { id: "hab_mat", nombre: "Habilidades del lenguaje matemático", prereq: ["hab_num"], periodo: 2 },
  { id: "com_efec", nombre: "Habilidades de comunicación efectiva", prereq: ["com_bas"], periodo: 2 },
  { id: "ing_elem", nombre: "Inglés elemental", prereq: ["ing_bas"], periodo: 2 },
  { id: "antro", nombre: "Fundamentos de antropología", periodo: 2 },
  { id: "port2", nombre: "Proceso de portafolio 2", periodo: 2 },

  // Puedes continuar la lista con todos los ramos...

  // Ramo final ejemplo:
  { id: "capstone", nombre: "Capstone", prereq: ["todo"], periodo: 8 },
];

const estados = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.id = ramo.id;
    div.innerText = `${ramo.nombre}\n(Periodo ${ramo.periodo})`;
    div.onclick = () => toggleRamo(ramo.id);
    contenedor.appendChild(div);
    estados[ramo.id] = false;
  });
  actualizarDisponibilidad();
}

function toggleRamo(id) {
  const ramo = document.getElementById(id);
  if (ramo.classList.contains("bloqueado")) return;
  estados[id] = !estados[id];
  ramo.classList.toggle("aprobado", estados[id]);
  actualizarDisponibilidad();
}

function actualizarDisponibilidad() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (!ramo.prereq) {
      div.classList.remove("bloqueado");
      return;
    }
    if (ramo.prereq.includes("todo")) {
      const todosAprobados = Object.values(estados).every(val => val);
      div.classList.toggle("bloqueado", !todosAprobados);
    } else {
      const disponibles = ramo.prereq.every(pr => estados[pr]);
      div.classList.toggle("bloqueado", !disponibles);
    }
  });
}

crearMalla();
