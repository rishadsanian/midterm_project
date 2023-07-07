
// // GET orders by ID
// router.get('/cart', (req, res) => {
//   const orderId = req.params.id;
//   const query = 'SELECT * FROM orders WHERE id = $1';

//   db.query(query, [orderId])
//     .then(data => {
//       const order = data.rows[0];
//       console.log(order);
//       res.json({ order });
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message });
//     });
// });

// // GET all order statuses
// router.get('/statuses', (req, res) => {
//   const query = 'SELECT * FROM order_status';

//   db.query(query)
//     .then(data => {
//       const statuses = data.rows;
//       console.log(statuses);
//       res.json({ statuses });
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message });
//     });
// });

const express = require("express");
const router = express.Router();
const db = require("../db/connection");

//GET menu by restaurant id

router.get("/:restaurant", (req, res) => {
  const cartId = req.params.restaurant;//need to link user table with restaurant table.
  const query = `SELECT orders.id, orders.status_id, cart_id, quantity, ordered_time, menu_items.name, users.first_name AS customer_name
  FROM orders
  JOIN users ON users.id = orders.customer_id
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN menu_items ON menu_items.id = orders.menu_item_id
  WHERE orders.restaurant_id = $1;`;

  db.query(query, [1])
    .then((data) => {
      const orders = data.rows;
      console.log('data.rows',orders);
      res.json({ orders });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
