const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// router.post("/", (req, res) => {
//   console.log('routing');
//   db.query(
//     `INSERT INTO orders (cart_id, quantity) VALUES ('1', 2)`
//   )
//     .then(() => {
//       res.send("Order inserted successfully");
//     })
//     .catch((e) => {
//       console.error(e);
//       res.send(e);
//     });
// });

const addOrder = async (item) => {
  console.log("Cart in add Order function:", item);

  const {
    customer_id,
    restaurant_id,
    menu_item_id,
    status_id,
    quantity,
    unit_price,
    ordered_time,
    cart_id,
  } = item;

  const queryString = `INSERT INTO ORDERS (customer_id,restaurant_id,menu_item_id,status_id,quantity,unit_price,ordered_time,cart_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 )`;

  const values = [
    customer_id,
    restaurant_id,
    menu_item_id,
    status_id,
    quantity,
    unit_price,
    ordered_time,
    cart_id,
  ];

  const insertIntoDB = await db.query(queryString, values);

  if (!insertIntoDB) return { msg: "error" };
  return { msg: "success" };

  //   return db
  //     .query(queryString, values)
  //     .then((result) => result.rows)
  //     .catch((err) => {
  //       console.log(err.message);
  //       throw err;
  //     });

  //   // Destructure keys and values into arrays
  //   const columns = Object.keys(item); //cart
  //   const values = Object.values(item); //array with objec
  //   const placeholders = [];

  //   // Placeholders for parameterized queries
  //   for (let i = 0; i < values.length; i++) {
  //     placeholders.push(`$${i + 1}`);
  //   }

  //   // Query string
  //   const qs = `
  //     INSERT INTO orders (${columns.join(", ")})
  //     VALUES (${placeholders.join(", ")})
  //     RETURNING *;
  //   `;
  //   console.log("Query String: ", qs);
  //   return db
  //     .query(qs, values)
  //     .then((result) => result.rows)
  //     .catch((err) => {
  //       console.log(err.message);
  //       throw err;
  //     });
};

router.post("/", async (req, res) => {
  const { cart } = req.body;

  for (let item of cart) {
    const insertData = await addOrder(item);

    if (insertData.msg === "error") {
      return res.json({ error: "error" });
    }
  }

  // console.log("req.body:", req.body);

  console.log("Cart in router post request: ", cart);
  return res.json({ name: 122 });
  // addOrder(cart)
  //   .then((response) => {
  //     res.send(response);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //     res.send(e);
  //   });
});

module.exports = router;
