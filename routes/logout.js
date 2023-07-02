const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //get user db
  //
  console.log('need jquery to render login form');
  res.render("users");
});


router.post('/', (req, res) => {
  req.session = null;
  res.redirect('/');
});
module.exports = router;