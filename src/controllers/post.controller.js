import { pool } from "../db.js";

export const postEmployees = async (req, res) => {
const {name, salary} = req.body;
const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary])
console.log(req.body);
res.send({rows});
};