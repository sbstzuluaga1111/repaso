//Server
import express from "express";
import {PORT} from '.config.js';
const app =express()

app.use(express.json());

app.listen(PORT);
console.log("Server encendido :D", PORT)

//rutas importadas
import employeesRoutes from "./routes/employees.routes.js";
import datos from "./routes/datos.routes.js";
app.use(employeesRoutes)
app.use(datos)



    