//llamado a la db
import {pool} from "../db.js";

export const db = async (req, res) => {
    // uso de pool de la db
        const [datos] = await pool.query('SELECT * FROM employee')
        res.json (datos)
        }