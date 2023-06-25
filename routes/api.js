const router = require("express").Router();

const clientesRouter = require("./api/cliente");
const apiviaje = require("./api/viaje");
const apihotel = require("./api/hotel");



router.use("/viaje", apiviaje);
router.use("/hotel", apihotel);
router.use("/clientes", clientesRouter);


module.exports = router;
