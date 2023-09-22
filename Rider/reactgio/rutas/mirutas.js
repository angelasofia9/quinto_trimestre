import  express  from "express";
import { todosdatosap } from "../controladores/micontrolador";

const mirutaaprendiz=express.Router();

mirutaaprendiz.get('/',todosdatosap);



