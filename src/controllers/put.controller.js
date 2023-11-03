import { pool } from "../db.js";

export const putEmployees = async (req, res) => {
const {id} = req.params
const {name, salary} = req.body

const [resultado] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?',[name,salary,id]);

console.log(resultado);
res.json('Resibido');
}