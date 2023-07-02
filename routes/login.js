const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// router.get("/", (req, res) => {
//   //should be '/:id'
//   // convert this to function
//   const query = `SELECT * FROM menu_items WHERE restaurant_id = ;`;
//   console.log(query);
//   db.query(query)

//     .then((data) => {
//       const menu = data.rows;
//       console.log(menu);
//       res.json({ menu });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

router.get("/", (req, res) => {
  // const inputEmail = req.body.email;
  const inputEmail = "smacshane8@telegraph.co.uk";
  const inputPassword = req.body.password;
  const query = `SELECT email, password from users `;
  // where email = smacshane8@telegraph.co.uk;`;

  db.query(query)
    .then((userObject) => {
      console.log(userObject);
      // res.json({ menu });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  // need a sql query that will  take in an email  and check if it exists in email db sq;

  console.log("need jquery to render login form");
  res.render("users");
});

module.exports = router;

router.post("/", (req, res) => {
  const userData = req.body;
  // Process the userData and perform necessary actions

  // Send a response back to the client
  res.send("User data received and processed successfully!");
});
