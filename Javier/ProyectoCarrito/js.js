
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const cursos = document.querySelectorAll('.agregar-carrito');
const contadorCompras = document.querySelector('#contador-compras');

let totalCompras = 0;


cursos.forEach(curso => {
    curso.addEventListener('click', agregarCurso);
});

listaCarrito.addEventListener('click', eliminarCurso);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


function agregarCurso(e) {
    e.preventDefault();

    const cursoSeleccionado = e.target.parentElement.parentElement;
    const cursoInfo = obtenerCursoInfo(cursoSeleccionado);

  
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${cursoInfo.imagen}" width="50"></td>
        <td>${cursoInfo.nombre}</td>
        <td>${cursoInfo.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${cursoInfo.id}">X</a></td>
    `;
    listaCarrito.appendChild(row);

    totalCompras++;
    actualizarContadorCompras();
}

function obtenerCursoInfo(curso) {
    const imagen = curso.querySelector('.imagen-curso').src;
    const nombre = curso.querySelector('.info-card h4').textContent;
    const precio = curso.querySelector('.precio span').textContent;
    const id = curso.querySelector('.agregar-carrito').getAttribute('data-id');
    return { imagen, nombre, precio, id };
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        const curso = e.target.parentElement.parentElement;
        curso.remove();

        totalCompras--;
        actualizarContadorCompras();
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    totalCompras = 0;
    actualizarContadorCompras();
}

function actualizarContadorCompras() {
    contadorCompras.textContent = totalCompras;
}

