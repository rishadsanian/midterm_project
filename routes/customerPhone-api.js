const express = require("express");
const router = express.Router();
const db = require("../db/connection");

//GET menu by restaurant id

router.get("/:id", (req, res) => {
  const customerId = req.params.cart_id;
  const query = "SELECT * FROM users WHERE id = $1 AND isCustomer = true;";

  db.query(query, [customerId])
    .then((data) => {
      const menu = data.rows;
      console.log(menu);
      res.json({ menu });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
