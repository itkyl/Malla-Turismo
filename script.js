const ramos = [
  { id: "fundamentos_de_la_industria_turÃ­stica", nombre: "Fundamentos de la industria turÃ­stica", periodo: 1 },
  { id: "destinos_y_atractivos_turÃ­sticos_nacionales", nombre: "Destinos y atractivos turÃ­sticos nacionales", periodo: 1 },
  { id: "tics_para_el_turismo_i", nombre: "TICS para el turismo I", periodo: 1 },
  { id: "habilidades_numÃ©ricas", nombre: "Habilidades numÃ©ricas", periodo: 1 },
  { id: "habilidades_bÃ¡sicas_de_comunicaciÃ³n", nombre: "Habilidades bÃ¡sicas de comunicaciÃ³n", periodo: 1 },
  { id: "inglÃ©s_bÃ¡sico", nombre: "InglÃ©s bÃ¡sico", periodo: 1 },
  { id: "proceso_de_portafolio_1", nombre: "Proceso de portafolio 1", periodo: 1 },
  { id: "programaciÃ³n_turÃ­stica", nombre: "ProgramaciÃ³n turÃ­stica", periodo: 2 },
  { id: "tÃ©cnicas_de_guiado", nombre: "TÃ©cnicas de guiado", periodo: 2 },
  { id: "destinos_patrimoniales_mundiales", nombre: "Destinos patrimoniales mundiales", periodo: 2 },
  { id: "habilidades_del_lenguaje_matemÃ¡tico", nombre: "Habilidades del lenguaje matemÃ¡tico", periodo: 2 },
  { id: "habilidades_de_comunicaciÃ³n_efectiva", nombre: "Habilidades de comunicaciÃ³n efectiva", periodo: 2 },
  { id: "inglÃ©s_elemental", nombre: "InglÃ©s elemental", periodo: 2 },
  { id: "fundamentos_de_antropologÃ­a", nombre: "Fundamentos de antropologÃ­a", periodo: 2 },
  { id: "proceso_de_portafolio_2", nombre: "Proceso de portafolio 2", periodo: 2 },
  { id: "principios_bÃ¡sicos_de_gestiÃ³n", nombre: "Principios bÃ¡sicos de gestiÃ³n", periodo: 3 },
  { id: "tics_para_el_turismo_ii", nombre: "TICS para el turismo II", periodo: 3 },
  { id: "tÃ©cnicas_para_recepciÃ³n_y_habitaciones", nombre: "TÃ©cnicas para recepciÃ³n y habitaciones", periodo: 3 },
  { id: "atractivos_servicios_y_productos_mundiales", nombre: "Atractivos, servicios y productos mundiales", periodo: 3 },
  { id: "desarrollo_del_turismo_y_hotelerÃ­a", nombre: "Desarrollo del turismo y hotelerÃ­a", periodo: 3 },
  { id: "inglÃ©s_intermedio", nombre: "InglÃ©s intermedio", periodo: 3 },
  { id: "Ã©tica_para_el_trabajo", nombre: "Ã‰tica para el trabajo", periodo: 3 },
  { id: "proceso_de_portafolio_3", nombre: "Proceso de portafolio 3", periodo: 3 },
  { id: "polÃ­ticas_de_gestiÃ³n", nombre: "PolÃ­ticas de gestiÃ³n", periodo: 4 },
  { id: "tÃ©cnicas_de_salÃ³n_comedor", nombre: "TÃ©cnicas de salÃ³n comedor", periodo: 4 },
  { id: "tÃ©cnicas_en_alimentos_y_bebidas", nombre: "TÃ©cnicas en alimentos y bebidas", periodo: 4 },
  { id: "mentalidad_emprendedora", nombre: "Mentalidad emprendedora", periodo: 4 },
  { id: "inglÃ©s_intermedio_alto", nombre: "InglÃ©s intermedio alto", periodo: 4 },
  { id: "optativo_formaciÃ³n_cristiana", nombre: "Optativo formaciÃ³n cristiana", periodo: 4 },
  { id: "proceso_de_portafolio_4", nombre: "Proceso de portafolio 4", periodo: 4 },
  { id: "marketing_turÃ­stico", nombre: "Marketing turÃ­stico", periodo: 5 },
  { id: "estrategias_de_ventas_para_el_turismo", nombre: "Estrategias de ventas para el turismo", periodo: 5 },
  { id: "gestiÃ³n_de_clientes", nombre: "GestiÃ³n de clientes", periodo: 5 },
  { id: "portuguÃ©s_i", nombre: "PortuguÃ©s I", periodo: 5 },
  { id: "Ã¡lgebra", nombre: "Ãlgebra", periodo: 5 },
  { id: "inglÃ©s_preavanzado", nombre: "InglÃ©s preavanzado", periodo: 5 },
  { id: "formaciÃ³n_complementaria", nombre: "FormaciÃ³n complementaria", periodo: 5 },
  { id: "prÃ¡ctica_laboral", nombre: "PrÃ¡ctica laboral", periodo: 5 },
  { id: "proceso_de_portafolio_5", nombre: "Proceso de portafolio 5", periodo: 5 },
  { id: "administraciÃ³n_de_reuniones_y_convenciones", nombre: "AdministraciÃ³n de reuniones y convenciones", periodo: 6 },
  { id: "control_de_calidad", nombre: "Control de calidad", periodo: 6 },
  { id: "revenue_management", nombre: "Revenue management", periodo: 6 },
  { id: "portuguÃ©s_ii", nombre: "PortuguÃ©s II", periodo: 6 },
  { id: "estadÃ­stica_descriptiva", nombre: "EstadÃ­stica descriptiva", periodo: 6 },
  { id: "esp_turismo_i", nombre: "ESP Turismo I", periodo: 6 },
  { id: "formaciÃ³n_complementaria", nombre: "FormaciÃ³n complementaria", periodo: 6 },
  { id: "proceso_de_portafolio_6", nombre: "Proceso de portafolio 6", periodo: 6 },
  { id: "evaluaciÃ³n_de_proyectos", nombre: "EvaluaciÃ³n de proyectos", periodo: 7 },
  { id: "tics_para_el_turismo_iii", nombre: "TICS para el turismo III", periodo: 7 },
  { id: "aspectos_legales_y_de_seguridad_en_el_turismo", nombre: "Aspectos legales y de seguridad en el turismo", periodo: 7 },
  { id: "portuguÃ©s_iii", nombre: "PortuguÃ©s III", periodo: 7 },
  { id: "innovaciÃ³n_en_productos_y_servicios", nombre: "InnovaciÃ³n en productos y servicios", periodo: 7 },
  { id: "esp_turismo_ii", nombre: "ESP Turismo II", periodo: 7 },
  { id: "Ã©tica_profesional", nombre: "Ã‰tica profesional", periodo: 7 },
  { id: "formaciÃ³n_complementaria", nombre: "FormaciÃ³n complementaria", periodo: 7 },
  { id: "proceso_de_portafolio_final", nombre: "Proceso de portafolio final", periodo: 7 },
  { id: "capstone", nombre: "Capstone", periodo: 8, prereq: ["todo"] },
  { id: "prÃ¡ctica_profesional", nombre: "PrÃ¡ctica profesional", periodo: 8, prereq: ["todo"] },
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
