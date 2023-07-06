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
      // console.log(order_items);
      res.json({ order_items });

      // const templateVars = {order_items, user: {}, userType: {}, cartTotal};
      // res.render('index', templateVars); // nend to change to index
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

  
  
router.post("/api/cart", (req, res) => {
  const cart = req.body;

  const query =
    "INSERT INTO orders (cart_id, quantity, ordered_time) VALUES ($1, $2, $3)";
  const values = [cart.cart_id, cart.quantity, cart.order_time];
  db.query(query, values);
  // eslint-disable-next-line camelcase
  db.addOrder(cart)
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});
module.exports = router;
