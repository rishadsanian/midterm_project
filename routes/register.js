//////////////////// ./register (user_register.ejs)  USER REGISTRATION PAGE    WITH USER EMAIL AND PASSWORD FORM
// ----------------------------------------------------------------------------
const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  const templateVars = { user: users[req.session.userID] };

  !templateVars.user
    ? res.render(`user_register`, templateVars)
    : res.redirect(`/urls`);
});

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
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, salt);

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
  if (!req.body.email || !req.body.password) {

    //get username, password, and is customer from body
    const { username, password, isCustomer } = req.body;
    return res.status(400).send("Email and password are required.");
  }

  //Check for duplicate emails for reg
  if (findUserByEmail(email) !== null) {
    return res.status(409).send("User already exists.");
  }

  //create new userId
  const userId = "user" + generateRandomString(users);

  //password security
  const password = req.body.password;
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
