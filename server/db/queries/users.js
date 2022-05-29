
import { Query } from "../";


const find = (column, value) => Query('SELECT * FROM users WHERE ?? = ?', [column, value])

const insert = (email, password) => Query('INSERT INTO users (email, password) VALUE (?, ?)', [email, password]); 


export default {
    find,
    insert
}




