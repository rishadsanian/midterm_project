const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);











////need to be changed
router.get('/', (req, res) => {
  //should be '/:id'
  // getQuery
  
  const query = `SELECT * FROM menu_items WHERE restaurant_id = 1;`;
  console.log(query);
  db.query(query)


    .then(data => {
      const menu = data.rows;
      console.log(menu);
      res.json({ menu });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;

// //////////////////// ./register (user_register.ejs)  USER REGISTRATION PAGE    WITH USER EMAIL AND PASSWORD FORM
// // ----------------------------------------------------------------------------
// const express = require("express");
// const router = express.Router();
// const cookieSession = require("cookie-session");
// const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);


// // router.get("/register", (req, res) => {
// //   const templateVars = { user: users[req.session.userID] };

// //   !templateVars.user
// //     ? res.render(`user_register`, templateVars)
// //     : res.redirect(`/urls`);
// // });

// // ----------------------------------------------------------------------------


router.post("/", (req, res) => {
  //validation

  //Check empty email or passwords
  if (!req.body.email || !req.body.password || !req.body.isCustomer) {
    return res.status(400).send("Email, password and customer type are required."); //jquery to add error handling snippet
  }

  //Check for duplicate emails for reg
  if (findUserByEmail(email) !== null) {
    return res.status(409).send("User already exists.");
  }

  //Declare variables
  const { username, password, isCustomer } = req.body;

  //password security
  const hashedPassword = bcrypt.hashSync(password, salt);


  //Save user to user database
  addUser();


  //Set cookies for username, usertype, user id and iscutomer
  console.log(req.session);
  // req.session.userID = userId;
  //redirect to index
  res.redirect(`/`);
});
