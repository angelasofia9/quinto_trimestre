import express from "express";
import cors from "cors";
import mirutaaprendiz   from "mirutaaprendiz";
import mibase from "./bases/bases";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("¡Hoy casi pierdo la clase de Node!");
});

app.use('/aprendices', mirutaaprendiz)

try{
    await mibase.authenticate()
    console.log("conexion exitosa");
}
    catch(error) {
        console.log("error de conexion");
}

app.listen(8000, () => {
    console.log("¡Lo logramos! Servidor en http://localhost:8000");
});


