const ramos = [
  { id: "fundamentos_de_la_industria_turística", nombre: "Fundamentos de la industria turística", periodo: 1 },
  { id: "destinos_y_atractivos_turísticos_nacionales", nombre: "Destinos y atractivos turísticos nacionales", periodo: 1 },
  { id: "tics_para_el_turismo_i", nombre: "TICS para el turismo I", periodo: 1 },
  { id: "habilidades_numéricas", nombre: "Habilidades numéricas", periodo: 1 },
  { id: "habilidades_básicas_de_comunicación", nombre: "Habilidades básicas de comunicación", periodo: 1 },
  { id: "inglés_básico", nombre: "Inglés básico", periodo: 1 },
  { id: "proceso_de_portafolio_1", nombre: "Proceso de portafolio 1", periodo: 1 },
  { id: "programación_turística", nombre: "Programación turística", periodo: 2 },
  { id: "técnicas_de_guiado", nombre: "Técnicas de guiado", periodo: 2 },
  { id: "destinos_patrimoniales_mundiales", nombre: "Destinos patrimoniales mundiales", periodo: 2 },
  { id: "habilidades_del_lenguaje_matemático", nombre: "Habilidades del lenguaje matemático", periodo: 2, prereq: ["habilidades_numéricas"] },
  { id: "habilidades_de_comunicación_efectiva", nombre: "Habilidades de comunicación efectiva", periodo: 2, prereq: ["habilidades_básicas_de_comunicación"] },
  { id: "inglés_elemental", nombre: "Inglés elemental", periodo: 2, prereq: ["inglés_básico"] },
  { id: "fundamentos_de_antropología", nombre: "Fundamentos de antropología", periodo: 2 },
  { id: "proceso_de_portafolio_2", nombre: "Proceso de portafolio 2", periodo: 2 },
  { id: "principios_básicos_de_gestión", nombre: "Principios básicos de gestión", periodo: 3 },
  { id: "tics_para_el_turismo_ii", nombre: "TICS para el turismo II", periodo: 3, prereq: ["tics_para_el_turismo_i"] },
  { id: "técnicas_para_recepción_y_habitaciones", nombre: "Técnicas para recepción y habitaciones", periodo: 3 },
  { id: "atractivos_servicios_y_productos_mundiales", nombre: "Atractivos, servicios y productos mundiales", periodo: 3 },
  { id: "desarrollo_del_turismo_y_hotelería", nombre: "Desarrollo del turismo y hotelería", periodo: 3 },
  { id: "inglés_intermedio", nombre: "Inglés intermedio", periodo: 3, prereq: ["inglés_elemental"] },
  { id: "ética_para_el_trabajo", nombre: "Ética para el trabajo", periodo: 3, prereq: ["fundamentos_de_antropología"] },
  { id: "proceso_de_portafolio_3", nombre: "Proceso de portafolio 3", periodo: 3 },
  { id: "políticas_de_gestión", nombre: "Políticas de gestión", periodo: 4, prereq: ["principios_básicos_de_gestión"] },
  { id: "técnicas_de_salón_comedor", nombre: "Técnicas de salón comedor", periodo: 4 },
  { id: "técnicas_en_alimentos_y_bebidas", nombre: "Técnicas en alimentos y bebidas", periodo: 4 },
  { id: "mentalidad_emprendedora", nombre: "Mentalidad emprendedora", periodo: 4 },
  { id: "inglés_intermedio_alto", nombre: "Inglés intermedio alto", periodo: 4, prereq: ["inglés_intermedio"] },
  { id: "optativo_formación_cristiana", nombre: "Optativo formación cristiana", periodo: 4 },
  { id: "proceso_de_portafolio_4", nombre: "Proceso de portafolio 4", periodo: 4 },
  { id: "marketing_turístico", nombre: "Marketing turístico", periodo: 5 },
  { id: "estrategias_de_ventas_para_el_turismo", nombre: "Estrategias de ventas para el turismo", periodo: 5 },
  { id: "gestión_de_clientes", nombre: "Gestión de clientes", periodo: 5 },
  { id: "portugués_i", nombre: "Portugués I", periodo: 5 },
  { id: "álgebra", nombre: "Álgebra", periodo: 5, prereq: ["habilidades_del_lenguaje_matemático"] },
  { id: "inglés_preavanzado", nombre: "Inglés preavanzado", periodo: 5, prereq: ["inglés_intermedio_alto"] },
  { id: "formación_complementaria_5", nombre: "Formación complementaria", periodo: 5 },
  { id: "práctica_laboral", nombre: "Práctica laboral", periodo: 5, prereq: ["todo"] },
  { id: "proceso_de_portafolio_5", nombre: "Proceso de portafolio 5", periodo: 5 },
  { id: "administración_de_reuniones_y_convenciones", nombre: "Administración de reuniones y convenciones", periodo: 6 },
  { id: "control_de_calidad", nombre: "Control de calidad", periodo: 6 },
  { id: "revenue_management", nombre: "Revenue management", periodo: 6 },
  { id: "portugués_ii", nombre: "Portugués II", periodo: 6, prereq: ["portugués_i"] },
  { id: "estadística_descriptiva", nombre: "Estadística descriptiva", periodo: 6, prereq: ["álgebra"] },
  { id: "esp_turismo_i", nombre: "ESP Turismo I", periodo: 6, prereq: ["inglés_intermedio"] },
  { id: "formación_complementaria_6", nombre: "Formación complementaria", periodo: 6 },
  { id: "proceso_de_portafolio_6", nombre: "Proceso de portafolio 6", periodo: 6 },
{ id: "evaluación_de_proyectos", nombre: "Evaluación de proyectos", periodo: 7 },
  { id: "tics_para_el_turismo_iii", nombre: "TICS para el turismo III", periodo: 7, prereq: ["tics_para_el_turismo_ii"] },
  { id: "aspectos_legales_y_de_seguridad_en_el_turismo", nombre: "Aspectos legales y de seguridad en el turismo", periodo: 7 },
  { id: "portugués_iii", nombre: "Portugués III", periodo: 7, prereq: ["portugués_ii"] },
  { id: "innovación_en_productos_y_servicios", nombre: "Innovación en productos y servicios", periodo: 7, prereq: ["mentalidad_emprendedora"] },
  { id: "esp_turismo_ii", nombre: "ESP Turismo II", periodo: 7, prereq: ["inglés_intermedio_alto"] },
  { id: "ética_profesional", nombre: "Ética profesional", periodo: 7, prereq: ["ética_para_el_trabajo"] },
  { id: "formación_complementaria_7", nombre: "Formación complementaria", periodo: 7 },
  { id: "proceso_de_portafolio_final", nombre: "Proceso de portafolio final", periodo: 7 },
  { id: "capstone", nombre: "Capstone", periodo: 8, prereq: ["todo"] },
  { id: "práctica_profesional", nombre: "Práctica profesional", periodo: 8, prereq: ["todo"] }
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
