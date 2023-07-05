const express = require("express");
const router = express.Router();
const db = require("../db/connection");


router.post('/', (req, res) => {
  req.session = null;
  res.redirect('../');
});

module.exports = router;
