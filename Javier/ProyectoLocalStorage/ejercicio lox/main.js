/*const formulario =document.querySelector('#formulario');
const listatweets=document.querySelector('#lista-tweets');
const listaimages=document.querySelector('#lista-images');
let tweets=[];

let images=[];


// aqui voy a crear los listeners
eventListeners();

function eventListeners(){
 formulario.addEventListener('submit', agregarTweet);
 formulario.addEventListener('change', agregarImage);//agregadooooooo

 document.addEventListener('DOMContentLoaded', ()=>{
   tweets=JSON.parse(localStorage.getItem('tweets'))|| [];
   console.log(tweets);
   crearHTML();
 })


 //agregadoooooooooooo
 document.addEventListener('DOMContentLoaded', ()=>{
    tweets=JSON.parse(localStorage.getItem('images'))|| [];
    console.log(images);
    crearHTML();
  })
 // hasta aqui

}






// aqui voy a crear las funciones

function agregarTweet(e){
 e.preventDefault();
 console.log('agregar tweet')



 //lee el valor del tex area
 const tweet=document.querySelector("#tweet").value;
 console.log(tweet);

 //validacion:
 if(tweet ==="") {
 // console.log('no puede ir vacio')
 mostrarError("no puede estar vacio");
  return; //previene que sigan ejecutando las lineas
 }

 const tweetObj={
   id:Date.now(), // valor en milisegundos para crear registros
   //tweet:tweet
tweet

}

 tweets=[...tweets,tweetObj];
 console.log(tweets);


//añadir el tweet al arreglo de tweets
//tweets=[...tweets, tweet];// con spread duplicamos el arregli y agregamos lo que estamos escribiendo en el textarea
console.table(tweets);

//se llama crearhtml para que se agregue el comentario el pantalla
crearHTML();

formulario.reset();

}



/////7


function agregarImage(o){
    o.preventDefault();
    console.log('agregar images')
   
   
   
    //lee el valor del tex area
    const inputimage=document.querySelector("#image").files[0];
    const image=inputimage.files[0];
    console.log(image);
   
    //validacion:
    if(image ==="") {
    // console.log('no puede ir vacio')
    mostrarError("no puede estar vacio");
     return; //previene que sigan ejecutando las lineas
    }
   
    const imageObj={
      id:Date.now(), // valor en milisegundos para crear registros
      //tweet:tweet
   image:URL.createObjectURL(image)
   
   }
   
    images=[...images,imageObj];
    console.log(images);
   
   
   //añadir el tweet al arreglo de tweets
   //tweets=[...tweets, tweet];// con spread duplicamos el arregli y agregamos lo que estamos escribiendo en el textarea
   console.table(images);
   
   //se llama crearhtml para que se agregue el comentario el pantalla
   crearHTML();
   
   formulario.reset();
   
   }


function mostrarError(error){
 const mensajeError=document.createElement('p');
 mensajeError.textContent= error;
 mensajeError.classList.add('error');

 const contenido=document.querySelector('#contenido');
 contenido.appendChild(mensajeError);

 // remover el mensaje despues de 3 segundos
 setTimeout(()=>{
 mensajeError.remove(); },3000);

}

function crearHTML(){
   limpiarHTML();


   //iniciando el html y se valida que se pueda ejecutar mientras  no este vacio el arreglo
   if(tweets.length >0){
      tweets.forEach((tweet)=>{

         const botonborrar = document.createElement('a');
         botonborrar.classList='borrar-tweet';
         botonborrar.innerText='eliminar';

         botonborrar.onclick=()=>{
            borartweet(tweet.id);
         }


         //aqui vamos a crear el html para los twetts
         const li =document.createElement('li');

         const img=document. createElement('img');//agregadoooooooooooooo
         //añadimos el texto
         li.textContent=tweet.tweet;
         img.src=img.image;//IMAGEEEEEEEEEEEEEE AGRAGOOOOOOOOOOO

         li.appendChild(botonborrar);
         //insertamos en el html
         listatweets.appendChild(li);
         listaimages.appendChild(img);;//IMAGEEEEEEEEEEEEEE AGRAGOOOOOOOOOOO
    
      });
   }

   agregarstorage();
}






function borartweet(id){
   console.log('eliminando tweet', id);
   tweets=tweets.filter(tweet=> tweet.id !== id);
   crearHTML();
}

function limpiarHTML(){
   while(listatweets.firstChild){
      listatweets.removeChild(listatweets.firstChild);
}
while(listaimages.firstChild){
    listaimages.removeChild(listaimages.firstChild);
}
}


//////////nuevooooooooooooooooooooooo

///////////////////////////////


function agregarstorage(){
   localStorage.setItem('tweets', JSON.stringify(tweets));
}

/////////////////////////nuevooooooooooo
function agregarstorage(){
    localStorage.setItem('images', JSON.stringify(images));
 }*/







/*


const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');
const listaimages = document.querySelector('#lista-images');
let tweets = [];
let images = [];

// aqui voy a crear los listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', agregarTweet);
  formulario.addEventListener('change', agregarImage);

  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    images = JSON.parse(localStorage.getItem('images')) || [];
    console.log(tweets);
    console.log(images);
    crearHTML();
  });
}

function agregarTweet(e) {
  // ... (el resto de tu función agregarTweet)
}

function agregarImage(e) {
  e.preventDefault();

  // Obtenemos el archivo de imagen seleccionado
  const image = document.querySelector("#image").files[0];

  // Validación:
  if (!image) {
    mostrarError("No se ha seleccionado una imagen");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    // Cuando la imagen se cargue, creamos un objeto para almacenar el id y la imagen
    const imageObj = {
      id: Date.now(),
      image: e.target.result // aquí guardamos el contenido de la imagen
    };

    images = [...images, imageObj];
    console.log(images);

    // Llamamos a crearHTML para mostrar la imagen en pantalla
    crearHTML();

    formulario.reset();
  };

  // Leemos el contenido de la imagen seleccionada como un Data URL
  reader.readAsDataURL(image);
}

function mostrarError(error) {
  // ... (el resto de tu función mostrarError)
}

function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    // ... (el resto de tu función crearHTML para mostrar los tweets)
  }

  if (images.length > 0) {
    images.forEach((imageObj) => {
      // Creamos un elemento de imagen
      const img = document.createElement('img');
      img.src = imageObj.image;
      img.style.width = '200px'; // Establecemos un ancho para la imagen

      // Insertamos la imagen en el contenedor correspondiente
      listaimages.appendChild(img);
    });
  }

  agregarStorage(); // Guardamos tanto los tweets como las imágenes en el LocalStorage
}

function borartweet(id) {
  // ... (el resto de tu función borartweet)
}

function limpiarHTML() {
  // ... (el resto de tu función limpiarHTML)
}

function agregarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
  localStorage.setItem('images', JSON.stringify(images));
}





*/

/*

const listaimages = document.querySelector('#lista-images');
let images = [];

eventListeners();

function eventListeners() {
  document.querySelector('#image').addEventListener('change', agregarImage);

  document.addEventListener('DOMContentLoaded', () => {
    images = JSON.parse(localStorage.getItem('images')) || [];
    crearHTML();
  });
}

function agregarImage(e) {
  e.preventDefault();

  const image = e.target.files[0];

  if (!image) {
    mostrarError("No se ha seleccionado una imagen");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const imageObj = {
      id: Date.now(),
      image: e.target.result,
      texto: '' // Inicializamos el texto vacío
    };

    images = [...images, imageObj];
    crearHTML();

    guardarImagenesEnStorage();
  };

  reader.readAsDataURL(image);
}

function mostrarError(error) {
  console.error(error);
}

function crearHTML() {
  limpiarHTML();

  if (images.length > 0) {
    images.forEach((imageObj) => {
      const container = document.createElement('div');
      container.classList.add('image-container');

      const img = document.createElement('img');
      img.src = imageObj.image;
      img.style.width = '200px';

      const textoInput = document.createElement('input');
      textoInput.type = 'text';
      textoInput.placeholder = 'Ingrese texto';
      textoInput.value = imageObj.texto;
      textoInput.addEventListener('change', (e) => {
        imageObj.texto = e.target.value; // Actualizamos el texto en el objeto
        guardarImagenesEnStorage(); // Actualizamos el texto en el almacenamiento
      });

      const texto = document.createElement('p');
      texto.textContent = imageObj.texto; // Mostramos el texto del objeto

      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', () => {
        eliminarImagen(imageObj.id);
      });

      container.appendChild(img);
      container.appendChild(textoInput);
      container.appendChild(texto);
      container.appendChild(botonEliminar);

      listaimages.appendChild(container);
    });
  }
}

function limpiarHTML() {
  listaimages.innerHTML = '';
}

function guardarImagenesEnStorage() {
  localStorage.setItem('images', JSON.stringify(images));
}

function eliminarImagen(id) {
  images = images.filter((imageObj) => imageObj.id !== id);
  crearHTML();
  guardarImagenesEnStorage();
}
*/












/*

const formulario =document.querySelector('#formulario');
const listaTweets=document.querySelector('#lista-tweets');
const listaImagenes=document.querySelector('#lista-imagenes');
let tweets=[];

let images=[];


// aqui voy a crear los listeners
eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    formulario.addEventListener('submit', agregarTweet);
    formulario.addEventListener('change', agregarImage); // agregado mio
    //cuando el documento esta listo
  document.addEventListener('DOMContentLoaded',()=>{
    tweets=JSON.parse(localStorage.getItem('tweets')) || [];
    images=JSON.parse(localStorage.getItem('images')) || [];
    console.log(tweets);
    console.log(images);

    crearHTML();

  

  })

}


// aqui voy a crear las funciones

function agregarTweet(e){
    e.preventDefault();
    console.log('agregar tweet')

    //lee el valor del tex area
    const tweet=document.querySelector("#tweet").value;
    console.log(tweet);

    //validacion:
    if(tweet ==="") {
        // console.log('no puede ir vacio')
        mostrarError("no puede estar vacio");
        return; //previene que sigan ejecutando las lineas
    }

    const tweetObj={
        id: Date.now(), // valor en milisegundos para crear registros con milisegundos 
    //tweet:tweet
        tweet
}

    tweets=[...tweets, tweetObj]; 
     //añadir el tweet al arreglo de tweets
    // tweets=[...tweets, tweet];// con spread duplicamos el arreglo y agregamos lo que estamos escribiendo en el textarea
     console.table(tweets);
     console.table(images);
    // llamar la funcion de crear el html
    crearHTML();
    // 
    formulario.reset();
}

// agregado mio___________________________________________-
function agregarImage(e){
    e.preventDefault();
    
    console.log('agregar images')

    //lee el valor del tex area
    const image=document.querySelector("#image").files[0];
    console.log(image);

    //validacion:
 
    if (!image) {
        mostrarError("No puede estar vecio");
        return;
      }

    const reader=new FileReader();

    reader.onload = function(e){
    
        
        const imageObj={
            id: Date.now(), // valor en milisegundos para crear registros con milisegundos 
        //tweet:tweet
            image: e.target.result // guarda el contenido de la imagen ?
            
              
        };
    
        images=[...images, imageObj]; 
         //añadir el tweet al arreglo de tweets
        // tweets=[...tweets, tweet];// con spread duplicamos el arreglo y agregamos lo que estamos escribiendo en el textarea
         console.log(images);
        // llamar la funcion de crear el html
        crearHTML();
        // 
        formulario.reset();
        };

        reader.readAsDataURL(image); 
     //  reader.readAsDataURL(file ); // o asi?????????????
    
    }

//hasta aquí___________________________________________-


function mostrarError(error){
    const mensajeError=document.createElement('p');
    mensajeError.textContent= error;
    mensajeError.classList.add('error');

    const contenido=document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    // remover el mensaje despues de 3 segundos
    setTimeout(()=>{
    mensajeError.remove(); },3000);
}


function crearHTML(){
    limpiarHTML();

    if(tweets.length >0 ){
        tweets.forEach((tweet)=>{

                   //crear boton de eliminar
            const botonBorrar =document.createElement('a');
            botonBorrar.classList='borrar-tweet';
            botonBorrar.innerText='Eliminar';

            // añadir funcion eliminar
            botonBorrar.onclick=()=>{
                borrarTwet(tweet.id)
                
                ;}
//-------------------------------------------------------------------------------------------

            //aqui vamos a crear el html para los tweets
            const li=document.createElement('li');
          

            //añadimos texto
            li.textContent=tweet.tweet;

            // añadimos el boton
            li.appendChild(botonBorrar);
            //insertar en el html
            listaTweets.appendChild(li);
          
        });

    }

    // correccion que hacia falta :--------------------
    if (images.length > 0) {
        images.forEach((imageObj) => {
          // Creamos un elemento de imagen
          const img = document.createElement('img');
          img.src = imageObj.image;
          img.style.width = '300px'; // Establecemos un ancho para la imagen
    
          // Insertamos la imagen en el contenedor correspondiente
          listaImagenes.appendChild(img);
        });
      }
      // hasta aquí.----------------------
 agregarStorage();
}




function borrarTwet(id){
   console.log('eliminando tweet', id)
   tweets= tweets.filter(tweet=> tweet.id !== id);
    crearHTML();






}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
    //agregado mio___________________________________________-
    while(listaImagenes.firstChild){
        listaImagenes.removeChild(listaImagenes.firstChild);
    }
    //hasta aquí___________________________________________-
}

// agrega comentario o tweet al local storage no borra con f5
function agregarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //agregado mio___________________________________________-

    localStorage.setItem('images', JSON.stringify(images));
    //hasta aquí___________________________________________-

}

*/







 /*
const formulario = document.querySelector('#formulario');
const listaImagenes = document.querySelector('#lista-imagenes');
let images = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
    formulario.addEventListener('change', agregarImage);

    document.addEventListener('DOMContentLoaded', () => {
        images = JSON.parse(localStorage.getItem('images')) || [];
        crearHTML();
    });
}

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector("#tweet").value;

    if (tweet === "") {
        mostrarError("No puede estar vacío");
        return;
    }



    formulario.reset();
}

function agregarImage(e) {
    e.preventDefault();

    const image = document.querySelector("#image").files[0];

    if (!image) {
        mostrarError("No se ha seleccionado una imagen");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const imageObj = {
            id: Date.now(),
            image: e.target.result,
            likes: 0,
            texto: '',
        };

        images = [...images, imageObj];
        crearHTML();

        formulario.reset();
    };

    reader.readAsDataURL(image);
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {
    limpiarHTML();

    if (images.length > 0) {
        images.forEach((imageObj) => {
            const img = document.createElement('img');
            img.src = imageObj.image;
            img.style.width = '300px';

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'x';
            botonEliminar.classList.add('button', 'button-primary', 'delete-button');
            botonEliminar.onclick = () => eliminarImagen(imageObj.id);

            const divContainer = document.createElement('div');
            divContainer.appendChild(img);
            divContainer.appendChild(botonEliminar);

            listaImagenes.appendChild(divContainer);
        });
    }

    agregarStorage();
}

function eliminarImagen(id) {
    images = images.filter(image => image.id !== id);
    crearHTML();
}

function limpiarHTML() {
    while (listaImagenes.firstChild) {
        listaImagenes.removeChild(listaImagenes.firstChild);
    }
}

function agregarStorage() {
    localStorage.setItem('images', JSON.stringify(images));
}*/

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