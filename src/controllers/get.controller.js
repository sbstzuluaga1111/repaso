import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
const [rows] = await pool.query('SELECT * FROM employee')
res.send({rows});
}