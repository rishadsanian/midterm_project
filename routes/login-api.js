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
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;
  const query = `SELECT email, password from users WHERE email = `;
  // where email = smacshane8@telegraph.co.uk;`;

  db.query(query)
    .then((userObject) => {
      if (userObject.length > 0) {
        res.send("success"); // check email key in user Object if it exists
      }

      // and chceck if password matching the passwordl
      console.log(userObject.rows);
    })
    .then((userObject) => {
      if (userObject.rows[0]["password"] === inputPassword) {
        res.send("userObject.rows");
      }
      //check if password
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); //reroute errorpage
    });
  // need a sql query that will  take in an email  and check if it exists in email db sq;

  console.log("need jquery to render login form");
  res.render("users");
});

module.exports = router;
