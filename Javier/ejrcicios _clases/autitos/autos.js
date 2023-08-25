import { confiapp } from "./modulo.js";

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const parentezco = document.querySelector("#parentezco");
const sexo = document.querySelector("#sexo");
const rutas = document.querySelector("#rutas");

const datosBusqueda = {
  nombre: "",
  apellido: "",
  edad: "",
  parentezco: "",
  sexo: "",
  ruta: "",
};

function mostrarDatosEnHTML(datos) {
  const resultadosContainer = document.getElementById("resultados");
  resultadosContainer.innerHTML = "";

  if (datos.length === 0) {
    resultadosContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  datos.forEach((persona) => {
    const personaElement = document.createElement("div");
    personaElement.innerHTML = `
      <p>ID: ${persona.id}</p>
      <p>Documento: ${persona.documento}</p>
      <p>Nombre: ${persona.nombre}</p>
      <p>Apellido: ${persona.apellido}</p>
      <p>Edad: ${persona.edad}</p>
      <p>Parentezco: ${persona.parentezco}</p>
      <p>Sexo: ${persona.sexo}</p>
      <p>Ruta: ${persona.ruta}</p>
      <hr>
    `;
    resultadosContainer.appendChild(personaElement);
  });
}

function buscar() {
  const resultadosFiltrados = confiapp.filter((persona) => {
    return (
      persona.nombre.includes(datosBusqueda.nombre) &&
      persona.apellido.includes(datosBusqueda.apellido) &&
      persona.edad.includes(datosBusqueda.edad) &&
      persona.parentezco.includes(datosBusqueda.parentezco) &&
      persona.sexo.includes(datosBusqueda.sexo) &&
      persona.ruta.includes(datosBusqueda.ruta)
    );
  });

  mostrarDatosEnHTML(resultadosFiltrados);
}

nombre.addEventListener("input", (e) => {
  datosBusqueda.nombre = e.target.value;
  buscar();
});

apellido.addEventListener("input", (e) => {
  datosBusqueda.apellido = e.target.value;
  buscar();
});

edad.addEventListener("input", (e) => {
  datosBusqueda.edad = e.target.value;
  buscar();
});

parentezco.addEventListener("input", (e) => {
  datosBusqueda.parentezco = e.target.value;
  buscar();
});

sexo.addEventListener("input", (e) => {
  datosBusqueda.sexo = e.target.value;
  buscar();
});

rutas.addEventListener("input", (e) => {
  datosBusqueda.ruta = e.target.value;
  buscar();
});

// Mostrar todos los datos iniciales al cargar la página
mostrarDatosEnHTML(confiapp);