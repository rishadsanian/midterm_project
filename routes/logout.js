const express = require("express");
const router = express.Router();
const db = require("../db/connection");


router.get('/', (req, res) => {
  req.session = null;
  res.redirect('../');
});

module.exports = router;
