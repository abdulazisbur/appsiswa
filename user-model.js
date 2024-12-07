const db = require('../config/db')

const getAllUser = async () => {
    const[rows] = await db.query('select * from siswa')
    return rows
}
module.exports ={getAllUser}