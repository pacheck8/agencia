const express = require('express');
const router = express.Router();
const {insertHotel, deleteHotel} = require("../../models/hotel.model")



router.get("/", async (req, res) => {
  const [result] = await db.query("SELECT * from agencia.hotel");
  res.send(result);
});

router.post('/', async (req, res) => {
  try {
    const [result] = await insertHotel(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
      const [result] = await deleteHotel(Number(req.params.id))
      res.json(result);
  } catch (error) {
      res.json({ 'fatal': error.message })
  }
})


module.exports = router;