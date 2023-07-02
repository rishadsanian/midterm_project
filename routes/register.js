//////////////////// ./register (user_register.ejs)  USER REGISTRATION PAGE    WITH USER EMAIL AND PASSWORD FORM
// ----------------------------------------------------------------------------
const express = require("express");
const router = express.Router();
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// router.get("/register", (req, res) => {
//   const templateVars = { user: users[req.session.userID] };

//   !templateVars.user
//     ? res.render(`user_register`, templateVars)
//     : res.redirect(`/urls`);
// });

// ----------------------------------------------------------------------------

// //saves user settings in users object
// router.post("/register", (req, res) => {
//   //validation

//   //Check empty email or passwords
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).send("Email and password are required.");
//   }

//   //Check for duplicate emails for reg
//   if (findUserByEmail(req.body.email, users) !== null) {
//     return res.status(409).send("User already exists.");
//   }

//   //create new userId
//   const userId = "user" + generateRandomString(users);

//   //password security

//   //Save user to user database
//   users[userId] = {
//     id: userId,
//     email: req.body.email,
//     password: hashedPassword, //todo hash for security
//   };

//   //Set cookies and redirect to /urls
//   req.session.userID = userId;
//   res.redirect(`/urls`);
// });

//saves user settings in users object
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

  const { username, password, isCustomer } = req.body;

  //password security
  const hashedPassword = bcrypt.hashSync(password, salt);

  //Save user to user database
  users[userId] = {
    id: userId,
    email: req.body.email,
    password: hashedPassword, //todo hash for security
  };

  //Set cookies and redirect to /urls
  req.session.userID = userId;
  res.redirect(`/urls`);
});
