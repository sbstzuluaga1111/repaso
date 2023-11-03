//imports de routes
import { Router } from "express";

const router = Router();

//Rutas y controllers
import { getEmployees } from "../controllers/get.controller.js";
router.get('/', getEmployees); //getEmployees se trae de los controllers

import { postEmployees} from "../controllers/post.controller.js";
router.post('/', postEmployees); //postEmployees se trae de los controllers

import { putEmployees } from "../controllers/put.controller.js";
router.put('/:id', putEmployees);//putEmployees se trae de los controllers

import { deleteEmployees } from "../controllers/delete.controller.js";
router.delete('/:id', deleteEmployees);//deleteEmployees se trae de los controllers
 

/// GET con id especifico
import { getEmployeesID } from "../controllers/get-id.controller.js";
router.get('/:id', getEmployeesID);

export default router;