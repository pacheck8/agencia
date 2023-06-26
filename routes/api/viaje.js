const express = require('express');
const router = express.Router();
const {insertViaje, deleteViaje} = require("../../models/viaje.model")



router.get("/", async (req, res) => {
  const [result] = await db.query("SELECT * from agencia.viaje");
  res.send(result);
});

router.post('/', async (req, res) => {
  try {
    const [result] = await insertViaje(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
      const [result] = await deleteViaje(Number(req.params.id))
      res.json(result);
  } catch (error) {
      res.json({ 'fatal': error.message })
  }
})


module.exports = router;