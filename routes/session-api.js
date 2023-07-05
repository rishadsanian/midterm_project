const express = require("express");
const router = express.Router();

router.get("/api/sessionData", (req, res) => {
  const userId = req.session.userId;
  const firstName = req.session.firstname;
  const isCustomer = req.session.isCustomer;

  res.json({ userId, firstName, isCustomer });
});
module.exports = router;
