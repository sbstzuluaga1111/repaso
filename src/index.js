//Server
import express from "express";
const app =express()
app.listen(3000)
console.log("Server encendido :D")

//rutas importadas
import employeesRoutes from "./routes/employees.routes.js";
import datos from "./routes/datos.routes.js";
app.use(employeesRoutes)
app.use(datos)



    