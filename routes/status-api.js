const express = require("express");
const router = express.Router();
const db = require("../db/connection");

//GET menu by restaurant id

router.get("/:customer_id", (req, res) => {
  const customerId = req.params.customer_id;
  const query = "SELECT * FROM orders WHERE customer_id = $1;";

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
