const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
  const { menu_item_id, order_id, quantity } = req.body;

  const query = 'INSERT INTO order_items (menu_item_id, order_id, quantity) VALUES ($1, $2, $3)';
  const values = [menu_item_id, order_id, quantity];
  db.query(query, values);
  db.end();
});
  
module.exports = router;