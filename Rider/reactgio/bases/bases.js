// const mysql = require('mysql2');

// // Configuración de la conexión a la base de datos
// const connection = mysql.createConnection({
//   host: 'localhost', // Cambia esto según tu configuración
//   user: 'tu_usuario', // Cambia esto al nombre de usuario de tu base de datos
//   password: 'tu_contraseña', // Cambia esto a tu contraseña de MySQL
//   database: 'tu_base_de_datos', // Cambia esto al nombre de tu base de datos
// });

// // Establecer la conexión
// connection.connect((err) => {
//   if (err) {
//     console.error('Error al conectar a MySQL:', err);
//     return;
//   }
//   console.log('Conexión a MySQL exitosa');
// });

// // Ejecuta consultas o operaciones en la base de datos aquí

// // Cierra la conexión cuando hayas terminado
// connection.end((err) => {
//   if (err) {
//     console.error('Error al cerrar la conexión:', err);
//     return;
//   }
//   console.log('Conexión a MySQL cerrada');
// });


// connection.query('SELECT * FROM mi_tabla', (err, results, fields) => {
//     if (err) {
//       console.error('Error al ejecutar la consulta:', err);
//       return;
//     }
//     console.log('Resultados de la consulta:', results);
//   });


import { sequelize } from "sequelize";

const mibase=new sequelize("rider", "vanessa", "",{
    host: "localhost",
    dialect:"mysql"
})


export default mibase

  