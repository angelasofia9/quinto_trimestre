
const formulario = document.querySelector("#formulario");
const listatweets = document.querySelector("#lista-tweets");
let tweets = [];

addEventListeners();
function addEventListeners() {
  formulario.addEventListener("submit", agregarTweet);
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);
    crearhtml();
  });
}

function agregarTweet(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const asignatura = document.querySelector("#asignatura").value;
  const imagen = document.querySelector("#imagen").files[0]; 

  if (nombre === "" || asignatura === "" || !imagen) {
    mostrarError("Debe completar todos los campos");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    nombre,
    asignatura,
    like: false,
    imagenURL: URL.createObjectURL(imagen), 
  };

  tweets.push(tweetObj);
  crearhtml();
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  setTimeout(() => mensajeError.remove(), 3000);
}

function crearhtml() {
  limpiarhtml();
  tweets.forEach((tweet) => {
    const li = document.createElement("li");

    if (tweet.imagenURL) {
      const img = document.createElement("img");
      img.src = tweet.imagenURL;
      img.alt = "Imagen subida";
      img.style.maxWidth = "200px";
      li.appendChild(img);
    }

    const infoContainer = document.createElement("div");
    infoContainer.textContent = `Titulo: ${tweet.nombre} | Descripcion: ${tweet.asignatura}`;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    buttonsContainer.style.display = "flex";

    const botonlike = createButton(tweet.liked ? "fas fa-heart red" : "far fa-heart", () => toggleLike(tweet));
    const botonborrar = createButton("borrar-tweet", () => borrarTweet(tweet.id), "X");
    const botonlikee = createButton("far fa-thumbs-up", () => incrementarContador(), );
const contadorSpan = document.createElement("span");
contadorSpan.textContent = 0;
botonlikee.appendChild(contadorSpan);
let contador = 0;
function incrementarContador() {
  contador++;
  contadorSpan.textContent = contador.toString();
}


    buttonsContainer.appendChild(botonlike);
    buttonsContainer.appendChild(botonborrar);
    buttonsContainer.appendChild(botonlikee);

    li.appendChild(infoContainer);
    li.appendChild(buttonsContainer);

    listatweets.appendChild(li);
  });
  agregarStorage();
}


function createButton(iconClass, onClick, text = "") {
  const button = document.createElement("button");
  button.innerHTML = `<i class="${iconClass}"></i> ${text}`;
  button.onclick = onClick;
  button.style.verticalAlign = "middle";
  return button;
}

function agregarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearhtml();
  agregarStorage();
}

function limpiarhtml() {
  listatweets.innerHTML = "";
}

function toggleLike(tweet) {
  tweet.liked = !tweet.liked;
  crearhtml();
  agregarStorage();
}

function updateLikeCounter(button, count) {
  button.textContent = `like (${count})`;
}





















 // luego del like añadir ptro like que sea incrementable cada que de click vaya sumando el numero de veces qaue le de