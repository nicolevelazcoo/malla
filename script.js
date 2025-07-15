function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (let ciclo in malla) {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>${ciclo}</h2>`;
    malla[ciclo].forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.innerHTML = `
        <strong>${curso.nombre}</strong> (${curso.creditos} créditos)
        <p class="prerequisitos">
          Tipo: ${curso.tipo} <br>
          ${curso.prerequisitos ? "Prerrequisitos: " + curso.prerequisitos.join(", ") : "Sin prerrequisitos"}
        </p>
        <button class="ver-relaciones" onclick="mostrarRelaciones(this)">Ver relaciones</button>
        <div class="relaciones">Este curso es necesario para: ${buscarDependientes(curso.codigo)}</div>
      `;
      divCiclo.appendChild(divCurso);
    });
    contenedor.appendChild(divCiclo);
  }
}
function mostrarRelaciones(boton) {
  const relaciones = boton.nextElementSibling;
  relaciones.style.display = relaciones.style.display === "block" ? "none" : "block";
}
function buscarDependientes(codigoCurso) {
  const relacionados = [];
  for (let ciclo in malla) {
    malla[ciclo].forEach(curso => {
      if (curso.prerequisitos && curso.prerequisitos.includes(codigoCurso)) {
        relacionados.push(curso.nombre);
      }
    });
  }
  return relacionados.length ? relacionados.join(", ") : "Ninguno";
}
window.onload = crearMalla;