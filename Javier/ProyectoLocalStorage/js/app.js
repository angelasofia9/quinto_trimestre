/*const formulario =document.querySelector('#formulario');
const listatweets= document.querySelector('lista-tweets');
let tweets=[];


//aqui vpoy a crear los listeners

EventListeners();
function EventListeners(){
formulario. addEventListener('submit', agregarTweet);
}





//aqui voy acrear las funciones
 function agregarTweet(e){
    e.preventDefault();
    console.log('agregartweet');

    //leer el valor del textare
const tweet = document.querySelector('#tweet').Value;
console.log(tweet);


//validacion
if(tweet ===''){
   //console.log('no puede ir vacio');
   mostrarError('esto  no puede ir vacio');
   return;
}

// añadir el tweet al arreglko de tweets
tweets = [... tweets, tweet];
console.log(tweets);
 
 }



 function mostrarError(error){
   const mensajeEerror =document.createElement('p');
   mensajeEerror.textContent = error;
   mensajeEerror.classList.add('error');


   const contenido =document.querySelector('#contenido');
   contenido.appendChild(mensajeEerror);


   //remover el mensaje despues de 3 segundos

   setTimeout(()=> {
      mensajeEerror.remove(); },   3000);

 }
*/





const formulario =document.querySelector('#formulario');
const listatweets=document.querySelector('#lista-tweets');
let tweets=[];




// aqui voy a crear los listeners
eventListeners();

function eventListeners(){
 formulario.addEventListener('submit', agregarTweet);

 document.addEventListener('DOMContentLoaded', ()=>{
   tweets=JSON.parse(localStorage.getItem('tweets'))|| [];
   console.log(tweets);
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
         //añadimos el texto
         li.textContent=tweet.tweet;

         li.appendChild(botonborrar);
         //insertamos en el html
         listatweets.appendChild(li);
    
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
}


function agregarstorage(){
   localStorage.setItem('tweets', JSON.stringify(tweets));
}