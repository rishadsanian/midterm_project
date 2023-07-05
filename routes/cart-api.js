const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  const query = `SELECT name, unit_price, picture_url, order_id, quantity
            FROM order_items AS oi
            JOIN menu_items AS mi ON mi.id = oi.menu_item_id
            WHERE oi.order_id = $1`;


  db.query(query, [orderId])
    .then(data => {
      const order_items = data.rows;
      console.log(order_items);
      res.json({ order_items });

      // const templateVars = {order_items, user: {}, userType: {}, cartTotal};
      // res.render('index', templateVars); // nend to change to index
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  });


// const cartTotal = function (order_items) {
//   let total = 0;
//   order_items.forEach(item => {
//     total += (item.unit_price)*(item.quantity);
//   });
//   return total;
// };

module.exports = router;
