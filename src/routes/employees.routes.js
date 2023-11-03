//imports de routes
import { Router } from "express";

const router = Router();

//Rutas y controllers
import { getEmployees } from "../controllers/get.controller.js";
router.get('/', getEmployees); //getEmployees se trae de los controllers

import { postEmployees} from "../controllers/post.controller.js";
router.post('/', postEmployees); //postEmployees se trae de los controllers

import { putEmployees } from "../controllers/put.controller.js";
router.put('/', putEmployees);//putEmployees se trae de los controllers

import { deleteEmployees } from "../controllers/delete.controller.js";
router.delete('/', deleteEmployees);//deleteEmployees se trae de los controllers
    
export default router;