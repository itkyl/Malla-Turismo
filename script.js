document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach((ramo, index) => {
    const nombre = ramo.textContent.trim().split('\n')[0];
    const clave = `estado-${index}-${nombre}`;

    // Recuperar estado guardado
    const estadoGuardado = localStorage.getItem(clave);
    if (estadoGuardado) {
      ramo.setAttribute('data-estado', estadoGuardado);
    }

    // Cambiar estado con clic
    ramo.addEventListener('click', (e) => {
      if (e.target.classList.contains('prereq')) return; // evitar toggle si se hace clic en prerrequisito
      const estados = ['pendiente', 'en_curso', 'aprobado'];
      let actual = ramo.getAttribute('data-estado') || 'pendiente';
      let siguiente = estados[(estados.indexOf(actual) + 1) % estados.length];
      ramo.setAttribute('data-estado', siguiente);
      localStorage.setItem(clave, siguiente);
    });
  });
});

