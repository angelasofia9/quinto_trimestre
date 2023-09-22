import mibase from "../bases/bases.js";    

import { DataTypes } from sequelize;

const datosaprendiz =mibase.define('aprendiz',{
id:{type: DataTypes.string},
nombre:{type: DataTypes.string},
apellido:{type: DataTypes.string},
})


export default datosaprendiz 