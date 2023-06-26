const express = require("express");
const router = express.Router();
const { insert, create,deleteClient,getById } = require("../../models/cliente.model")

/* GET users listing. */
router.get("/", async (req, res) => {
  const [result] = await db.query("SELECT * from agencia.cliente");
  res.send(result);
});


router.post("/", async (req, res) => {
  try {
    const [result] = await insert(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
router.post("/", async (req, res) => {
  //req.body es el cuerpo de la peticion que queremos guardar y la vamos a enviar en json.
  try {
    //console.log(req.body);
    const [result] = await create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
      let id = Number(req.params.id);
      const [result] = await getById(id)
      res.json(result);
  } catch (error) {
      res.json({ 'fatal': error.message })
  }
})
router.delete('/:id', async (req, res) => {
  try {
      const [result] = await deleteClient(Number(req.params.id))
      res.json(result);
  } catch (error) {
      res.json({ 'fatal': error.message })
  }
})

module.exports = router;
