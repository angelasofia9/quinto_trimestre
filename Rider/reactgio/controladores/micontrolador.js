import datosaprendiz from "../modelo/mimodelo.js";

export const todosdatosap= async(req, res)=>{
    try{
        const aprendices= await datosaprendiz.findall()
        res.json(aprendices)
    }
    
    catch(error){
        res.json({message: error.message})
    }}


    