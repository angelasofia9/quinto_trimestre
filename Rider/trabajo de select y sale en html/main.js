/*function mostrarDatos() {
   
    var selectedAño = document.getElementById("año").value;
   
    var selectedMes = document.getElementById("mes").value;
   
    var selectedTrimestre = document.getElementById("trimestre").value;
   
    var selectedCompetencia = document.getElementById("competencia").value;

    var selectedRadio = document.querySelector('input[name="fav_language"]:checked').value;
   
    var datosSeleccionados = "Año: " + selectedAño +
    ", Mes: " + selectedMes +
    ", Trimestre: " + selectedTrimestre +
    ", Competencia: " + selectedCompetencia +
    ", Resultado: " + selectedRadio;
   

 
   
    var datosVector = [ `["${selectedMes}", "${selectedAño}", "${selectedTrimestre}", "${selectedCompetencia}", "${selectedRadio}"]`];


document.getElementById("datosSeleccionados").innerText = datosSeleccionados + datosVector;
}
function mostrarDatos(año,mes,trimestre,competencia,radio){
    const datos=( "Mes:"+año+",Año:"+mes+",Trimestre:"+trimestre+",competencia:"+competencia+",radio:"+radio+" "+" "+""+""+"");
   
   
    const objeto={
        meses:mes,
        años:año,
        trimestres:trimestre,
        competencias:competencia,
        radios:radio,
    }
   
   
    document.getElementById('datosSeleccionados').textContent=datos+JSON.stringify(objeto);
    return objeto;
   
}
function mostrarDatos (año,mes,trimestre,competencia,radio,fecha){
const otroarreglo=[año,mes,trimestre,competencia,radio,fecha]
enviar(otroarreglo)    

}
function enviar (otroarreglo){

console.log(otroarreglo)
return
}*/


/*function mostrarDatos (año,mes,trimestre,competencia,radio,fecha){
 const otroarreglo=[año,mes,trimestre,competencia,radio,fecha]
     enviar(otroarreglo)

     }
     function enviar (otroarreglo){

     console.log(enviar)

     }


     let mifecha = otroarreglo[3]
     function mostrarMesDeFecha(fecha){
        const fechaobj =new Date (fecha);
        const nombremes = fechaobj.toLocaleDateString('default', {month: 'long'});
    console.log(nombremes);
    return mostrarMesDeFecha;}

*/



  // function mostrarDatos(año, mes, trimestre, competencia, radio, fecha) {
  //   const otroarreglo = [año, mes, trimestre, competencia, radio, fecha];
  //   otroarreglo[5] = obtenerNombreMes(fecha);
  //   enviar(otroarreglo);

  // }

  // function enviar(otroarreglo) {
  //   console.log(otroarreglo);
  // }

  // function obtenerNombreMes(fecha) {
  //   const fechaObj = new Date(fecha);
  //   const nombreMes = fechaObj.toLocaleString('default', { month: 'long' });
  //   return nombreMes;
  // }


//   const mostrarDatos=(arraynotas)=>{

//     const notafinal = (nota1 + nota2 + nota3) / 3;
//     console.log(notafinal);

//   return notafinal;
//   }

// const minota=()=>{
//   const nota1 = parseFloat(document.querySelector('#nota1').value);
//   const nota2 = parseFloat(document.querySelector('#nota2').value);
//   const nota3 = parseFloat(document.querySelector('#nota3').value);
//   arraynotas[nota1,nota2,nota3]
//   midefinitiva=mostrarDatos(arraynotas)
// }


// function mostrarDatos(arrayNotas) {
//   const notafinal = (arrayNotas[0] + arrayNotas[1] + arrayNotas[2]) / 3;
//   return notafinal;


// }

// function enviar() {
//   const nota1 = parseFloat(document.querySelector('#nota1').value);
//     const nota2 = parseFloat(document.querySelector('#nota2').value);
//     const nota3 = parseFloat(document.querySelector('#nota3').value);
//     arraynotas[nota1,nota2,nota3]
//     midefinitiva=mostrarDatos(arraynotas)


//     console.log(notafinal);
// }
// const mostrarDatos = (arrayNotas) => (arrayNotas[0] + arrayNotas[1] + arrayNotas[2]) / 3;
// const mostrarDatos = (arrayNotas){
//   let sumatoria = 0;
//   for (let i = 0; i < arrayNotas.length; i++) {
//     sumatoria += arrayNotas[i];
//    }
//   // for(let i of arrayNotas){
//   //   sumatoria+=i
//   // }
//   // const notafinal = (arrayNotas[0] + arrayNotas[1] + arrayNotas[2]) / 3;
//   //   return notafinal;}
//    const notafinal = sumatoria / arrayNotas.length;
//    return notafinal;
// }







const mostrarDatos = (arrayNotas, fnporcentaje) => {
  let sumatoria = 0;
  for (let i = 0; i < arrayNotas.length; i++) {
    sumatoria += arrayNotas[i];
  }
  const notafinal = sumatoria / arrayNotas.length;
  fnporcentaje(arrayNotas[0], arrayNotas[1], arrayNotas[2]);
  return notafinal;
}

function enviar() {
  const nota1 = parseFloat(document.querySelector('#nota1').value);
  const nota2 = parseFloat(document.querySelector('#nota2').value);
  const nota3 = parseFloat(document.querySelector('#nota3').value);

  const arrayNotas = [nota1, nota2, nota3];

  const midefinitiva = mostrarDatos(arrayNotas, fnporcentaje);

  console.log(midefinitiva);
}

function fnporcentaje(nota1, nota2, nota3) {
  const not1 = nota1 * 0.03;
  const not2 = nota2 * 0.03;
  const not3 = nota3 * 0.03;
  const arraycito=[not1,not2,not3]
  console.log(arraycito[0],arraycito[1],arraycito[2]);
}





// function enviar() {
//   alert('1. Mi función');
//   rm(afuncion);
// }

// function rm(callback) {
//   callback();
// }

// function afuncion() {
//   alert("2. Estoy trabajando");
// }
// enviar();
