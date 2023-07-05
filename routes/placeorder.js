const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
  const { menuItemId, orderId, quantity } = req.body;

  const query = 'INSERT INTO order_items (menu_item_id, order_id, quantity) VALUES ($1, $2, $3)';
  const values = [menuItemId, orderId, quantity];
  db.query(query, values);
  db.end();
});
  
module.exports = router;

router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  const query = 'SELECT * FROM order_items WHERE order_id = $1;';
  
  db.query(query, [orderId])
    .then(data => {
      const orders = data.rows;
      console.log(orders);
      res.json({ orders });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;