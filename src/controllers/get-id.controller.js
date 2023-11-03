import { pool } from "../db.js";

export const getEmployeesID = async (req, res) => {
const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
res.send(rows[0]);
}