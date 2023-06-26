const tableDb = "agencia.cliente";

const insert = ({ nombre, apellidos, direccion, telefono, fecha_de_nacimiento, email, dni }) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, apellidos, direccion,telefono,fecha_de_nacimiento,email,dni) VALUES (?,?,?,?,?,?,?)`, [nombre, apellidos, direccion, telefono, fecha_de_nacimiento, email,dni]);
}
const create = ({ nombre, apellidos }) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, apellidos) VALUES (?,?)`, [nombre, apellidos])
}
const deleteClient = (clienteId) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [clienteId])

}
const getById = (clienteId) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [clienteId]);
}
module.exports = {insert,create,deleteClient,getById};