const tableDb = "agencia.cliente";

const insert = ({ nombre, apellidos, direccion, telefono, fecha_de_nacimiento, email, dni }) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, apellidos, direccion,telefono,fecha_de_nacimiento,email,dni) VALUES (?,?,?,?,?,?,?)`, [nombre, apellidos, direccion, telefono, fecha_de_nacimiento, email,dni]);
}
const create = ({ nombre, experiencia }) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, apellidos) VALUES (?,?)`, [nombre, apellidos])
}
module.exports = {insert,create};