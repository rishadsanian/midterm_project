const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// POST route for user login
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match the credentials in the database
  const query = `SELECT first_name, last_name, email, password, isCustomer FROM users WHERE email = $1`;
  db.query(query, [email])
    .then((user) => {
      //check if email matched - user exists
      if (user.rows.length === 0) {
        return res.send("User not found");
      }

      // Incorrect password
      if (!user.password === password) {
        res.send("Incorrect password");
      }

      // Authentication successful
      console.log("authentication successful");
      const currentUser = user.rows[0];
      res.redirect("/");

      req.session.userId = user.id;
      req.session.firstname = user.first_name;
      req.session.lastname = user.last_name;
      req.session.isCustomer = user.isCustomer;
      req.session.phone = user.phone;

      console.log(currentUser);

      res.redirect("/");

      //save to template vars and send to index
    })

    .catch((error) => {
      console.log(error);
      res.status(500).send("An error occurred");
    });
});

module.exports = router;
