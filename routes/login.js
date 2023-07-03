const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //get user db
  //
  console.log('need jquery to render login form');
  res.render("users");
});

module.exports = router;

router.post("/", (req, res) => {
  const userData = req.body;
  // Process the userData and perform necessary actions

  // Send a response back to the client
  res.send("User data received and processed successfully!");
});