const tableDb = "agencia.hotel";

const insertHotel = ({ nombre, direccion,ciudad,numero_de_estrellas,descripcion,tarifa}) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, direccion,ciudad,\`numero de estrellas\`,descripcion,tarifa) VALUES (?,?,?,?,?,?)`, [nombre, direccion,ciudad,numero_de_estrellas,descripcion,tarifa]);
}
const deleteHotel = (clienteId) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [clienteId])

}
module.exports = {insertHotel,deleteHotel};