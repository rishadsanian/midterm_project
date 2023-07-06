const express = require("express");
const router = express.Router();
const db = require("../db/connection");

//GET menu by restaurant id

router.get("/:cart_id", (req, res) => {
  const cartId = req.params.cart_id;
  const query = `SELECT orders. *, restaurants.id, restaurants.name, restaurants.phone, users.id, users.phone AS customer_phone
  FROM users 
  JOIN orders ON users.id = orders.customer_id
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  WHERE orders.cart_id = $1;`;

  db.query(query, [cartId])
    .then((data) => {
      const menu = data.rows;
      res.json({ menu });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
