const express = require("express");
const router = express.Router();
const db = require("../db/connection");



// router.post("/cart", (req, res) => {
//   const newCart = req.body;
//   // eslint-disable-next-line camelcase
//   db
//     .addOrder(newCart)
//     .then((cart) => {
//       res.send(cart);
//     })
//     .catch((e) => {
//       console.error(e);
//       res.send(e);
//     });
// });

module.exports = router;

const addOrder = (cart) => {
  //destructure keys and values into arrays
  const columns = Object.keys(cart);
  const values = Object.values(cart);
  const placeholders = [];
  
  //placeholders for parameterized queries
  for (let i = 0; i < values.length; i++) {
    placeholders.push(`$${i + 1}`);
  }

  //queryString
  const qs = `
    INSERT INTO orders (${columns.join(", ")})
    VALUES (${placeholders.join(", ")})
    RETURNING *;
  `;

  return db
    .query(qs, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// module.exports = {addOrder};

