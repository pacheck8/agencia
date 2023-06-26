const router = require("express").Router();


router.use("/cliente", require ("./api/cliente"));
router.use("/hotel", require ("./api/hotel"));
router.use("/viaje", require ("./api/viaje"));

module.exports = router;
