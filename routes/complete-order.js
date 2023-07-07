const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", async (req, res) => {
  const { order } = req.body;

  for (let item of order) {
    const insertData = await completeOrder(item);

    if (insertData.msg === "error") {
      return res.json({ error: "error" });
    }
  }
  console.log("order in router post request: ", order);
  return res.json({ name: 122 });
});

module.exports = router;
