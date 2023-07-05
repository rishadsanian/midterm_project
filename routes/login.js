const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// POST route for user login
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match the credentials in the database
  const query = `SELECT first_name, last_name, phone, email, password, isCustomer FROM users WHERE email = $1`;
  db.query(query, [email])
    .then((data) => {
      //check if email matched - user exists
      if (data.rows.length === 0) {
        return res.send("User not found");
      }

      // Incorrect password
      if (!data.row[0].password === password) {
        res.send("Incorrect password");
      }

      // Authentication successful
      console.log("Authentication successful");
      const user = data.rows[0];

      //Set Cookies
      req.session.userId = user.id;
      req.session.firstname = user.first_name;
      req.session.lastname = user.last_name;
      req.session.isCustomer = user.isCustomer;
      req.session.phone = user.phone;

      // console.log(user);

      let templateVars = {
        user: user.first_name,
        userType: user.iscustomer,

      };

      //goes to index regardless of cookie or not for now TODO ADD ERROR HANDLER

      res.render("index", templateVars);
    })
    // route to index.ejs //need to ensure  cookies goes with it.
    // res.redirect("/");

    .catch((error) => {
      console.log(error);
      res.status(500).send("An error occurred");
    });
});

module.exports = router;
