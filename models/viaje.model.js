const tableDb = "agencia.viaje";

const insertViaje = ({fecha_salida, fecha_vuelta,identificador_vuelo_ida,identificador_vuelo_vuelta,hotel}) => {
    return db.query(`INSERT INTO ${tableDb} (\`fecha salida\`,\`fecha vuelta\`,\`identificador vuelo ida\`,\`identificador vuelo vuelta\`,hotel) VALUES (?,?,?,?,?)`, [fecha_salida, fecha_vuelta,identificador_vuelo_ida,identificador_vuelo_vuelta,hotel]);
}
const deleteViaje = (clienteId) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [clienteId])

}
module.exports = {insertViaje,deleteViaje};