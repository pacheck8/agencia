const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end('obtener todos los hoteles');
});

module.exports = router;