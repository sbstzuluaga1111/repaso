//llamado a la db
import {pool} from "../db.js";

export const db = async (req, res) => {
    // uso de pool de la db
        const [id,name,salary] = await pool.query('DESCRIBE employee')
        res.json (id,name,salary)
        }