import {nombreprofesor, asignaturaprofesor, ihorariaprofesor,asignatura} from"./profesor.js";

console.log(asignatura(nombreprofesor,asignaturaprofesor,ihorariaprofesor));

import { tutor } from "./profesor.js";
console.table(tutor);

//encontrar un tutor po id

const traertutorbyid1=(id)=>{
    return tutor.find((tutor)=>{
        if(tutor.id === id){
            return tutor;
        }
    })
};
console.table(traertutorbyid1(2));

//simplificadoooo

const traertutorbyid2 =(id)=>{
    return tutor.find((tutor)=> tutor.id === id);

};

 console.table(traertutorbyid2(1));

 //simplificado sin return

 const traertutorbyid3=(id) =>tutor.find((tutor)=> tutor.id === id);
 console.table(traertutorbyid3(3));

 //buscar por nombre
 
 const traertutorbyid4=(nombre) =>tutor.find((tutor)=> tutor.nombre === nombre);
 console.table(traertutorbyid4("daniel"));

 const traertutorbyid5=(nombre) =>tutor.filter((tutor)=> tutor.nombre === nombre);
 console.table(traertutorbyid5("angela"));

