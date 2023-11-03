import { pool } from "../db.js";

export const deleteEmployees = async (req, res) => {
const resultado = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
console.log(resultado)
res.send('Eliminado')
}