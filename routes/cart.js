const express = require("express");
const router = express.Router();
const db = require("../db/connection");
// const {addOrder} = require("./helpers")

const addOrder = async (item) => {
  console.log("Cart in add Order function:", item);

  // Destructure keys and values into arrays
  const columns = Object.keys(item); //cart
  const values = Object.values(item); //array with object
  const placeholders = [];

  // Placeholders for parameterized queries
  for (let i = 0; i < values.length; i++) {
    placeholders.push(`$${i + 1}`);
  }

  // Query string
  const qs = `
      INSERT INTO orders (${columns.join(", ")})
      VALUES (${placeholders.join(", ")})
      RETURNING *;
    `;
  console.log("Query String: ", qs);
  return db
    .query(qs, values)
    .then((result) => result.rows)
    .catch((err) => {
      console.log(err.message);
      throw err;
    });

};

router.post("/", async (req, res) => {
  const { cart } = req.body;

  for (let item of cart) {
    const insertData = await addOrder(item);

    if (insertData.msg === "error") {
      return res.json({ error: "error" });
    }
  }
  console.log("Cart in router post request: ", cart);
  return res.json({ name: 122 });
});

module.exports = router;
