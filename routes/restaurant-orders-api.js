const express = require('express');
const router = express.Router();
const db = require('../db/connection');

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

router.get("/:customer_id", (req, res) => {
  const customerId = req.params.customer_id;
  const query = "SELECT * FROM orders WHERE status_id = $1;";

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
