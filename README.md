# Repaso

* Iniciar el trabajo de node:
```
npm init -y
```

* Descargar las dependencias:
```
npm i express
npm i nodemon -D
npm i mysql2
```

* Modificamos package.json:
```
{
  "name": "practica-backend-final",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.6.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

```

* Manejar una estructura de carpetas y de archivos:

<div id ="header" align="center">
<img src="https://github.com/sbstzuluaga1111/repaso/assets/133683120/917d13df-3aae-47c3-9543-fae6d5c4ed95">
</div>

* Iniciamos server en index.js:
```
import express from "express";
const app =express()
app.listen(3000)
console.log("Server encendido :D")
```

* Rutas:
Creamos la ruta.routes.js en routes pero antes importamos Router de express.
```
import { Router } from "express";
const router = Router();
```
```
//Rutas y controllers
import { getEmployees } from "../controllers/get.controller.js";

router.get('/', getEmployees); //getEmployees se trae de los controllers
```

* Controlador:
Creamos su respectivo controlador y lo exportamos para usarlo en las rutas.
```
export const getEmployees =  (req, res) => {
    res.send('mostrando')
}
```

* Conectamos la DB:
En el archivo db.js.

```
import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'sebasz1111',
    port: 3306,
    database: 'ejemplo',
})
```
lo exportamos para usarlo junto al controlador se requiera.

```
import {pool} from "../db.js";

export const db = async (req, res) => {
    // uso de pool de la db
        const [id,name,salary] = await pool.query('DESCRIBE employee')
        res.json (id,name,salary)
        }
```

