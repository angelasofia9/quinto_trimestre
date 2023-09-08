let currentId = 1;

function abrirModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

function cerrarModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function agregarEstudianteDesdeModal() {
  return new Promise((resolve, reject) => {
    const nombre = document.getElementById("nombre").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const definitiva = (nota1 + nota2 + nota3) / 3;

    if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      agregarEstudiante(nombre, nota1, nota2, nota3, definitiva);
      cerrarModal();
      resolve("Estudiante agregado correctamente");
    } else {
      reject("Por favor, ingresa datos válidos.");
    }
  });
}

function agregarEstudiante(nombre, nota1, nota2, nota3, definitiva) {
  const tabla = document.getElementById("tablaEstudiantes");
  const nuevaFila = tabla.insertRow(-1);

  const celda1 = nuevaFila.insertCell(0);
  const celda2 = nuevaFila.insertCell(1);
  const celda3 = nuevaFila.insertCell(2);
  const celda4 = nuevaFila.insertCell(3);
  const celda5 = nuevaFila.insertCell(4);
  const celda6 = nuevaFila.insertCell(5);
  const celda7 = nuevaFila.insertCell(6);

  celda1.innerHTML = currentId++;
  celda2.innerHTML = nombre;
  celda3.innerHTML = nota1;
  celda4.innerHTML = nota2;
  celda5.innerHTML = nota3;
  celda6.innerHTML = definitiva.toFixed(2);
  celda7.innerHTML = `
    <button class="editing" onclick="editarEstudiante(this)">Editar</button>
    <button onclick="eliminarEstudiante(this)">Eliminar</button>
  `;
}

function editarEstudiante(boton) {
  const fila = boton.parentNode.parentNode;
  const celdas = fila.cells;

 
  
  const id = celdas[0].innerHTML;
  const nombre = celdas[1].innerHTML;
  const nota1 = parseFloat(celdas[2].innerHTML);
  const nota2 = parseFloat(celdas[3].innerHTML);
  const nota3 = parseFloat(celdas[4].innerHTML);

  

  document.getElementById("idEdit").value = id;
  document.getElementById("nombreEdit").value = nombre;
  document.getElementById("nota1Edit").value = nota1;
  document.getElementById("nota2Edit").value = nota2;
  document.getElementById("nota3Edit").value = nota3;


  abrirModalEdit();


  boton.disabled = true;
}

function abrirModalEdit() {
  const modalEdit = document.getElementById("myModalEdit");
  modalEdit.style.display = "flex";
}

function cerrarModalEdit() {
  const modalEdit = document.getElementById("myModalEdit");
  modalEdit.style.display = "none";

  const botonEditar = document.querySelector(".editing");
  botonEditar.disabled = false;
}

function guardarEstudianteEditado() {
  const id = document.getElementById("idEdit").value;
  const nombre = document.getElementById("nombreEdit").value;
  const nota1 = parseFloat(document.getElementById("nota1Edit").value);
  const nota2 = parseFloat(document.getElementById("nota2Edit").value);
  const nota3 = parseFloat(document.getElementById("nota3Edit").value);
  const definitiva = (nota1 + nota2 + nota3) / 3;

  if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const tabla = document.getElementById("tablaEstudiantes");
    const fila = tabla.rows[id];
    const celdas = fila.cells;

    celdas[1].innerHTML = nombre;
    celdas[2].innerHTML = nota1;
    celdas[3].innerHTML = nota2;
    celdas[4].innerHTML = nota3;
    celdas[5].innerHTML = definitiva.toFixed(2);

    
    cerrarModalEdit();
  } else {
    alert("Por favor, ingresa datos válidos.");
  }
}

function eliminarEstudiante(boton) {
  const fila = boton.parentNode.parentNode;
  fila.parentNode.removeChild(fila);
}



document.getElementById("openModalBtn").addEventListener("click", abrirModal);



document.getElementById("addStudentModalBtn").addEventListener("click", () => {
  agregarEstudianteDesdeModal()
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
