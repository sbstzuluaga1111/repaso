//base de datos
import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'sebasz1111',
    port: 3306,
    database: 'ejemplo',
})
