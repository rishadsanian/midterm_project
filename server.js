////////////////////////////////////////////////////////////////////////////////
////                   HUNGRY HUMANS /any company                           ////
///                        FOOD ORDERING APP                               ////
//////////////////////////////////////////////////////////////////////////////

//MODULES

// load .env data into process.env
require("dotenv").config();

//SASS for scss files
const sassMiddleware = require("./lib/sass-middleware");

//Cookies and encryption
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");

// Web server setup
const express = require("express");
const morgan = require("morgan");




const PORT = process.env.PORT || 8080;
const app = express();

/////////////////////MIDDLEWARE SETUP //////////////////////////////////////////

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Security SALT for bcrypt and cookie session management
const salt = bcrypt.genSaltSync(10);
app.use(
  cookieSession({
    name: "session",
    keys: [salt, salt, salt],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

///// ///////////////ROUTES REQUIRE and MOUNT///////////////////////////////////

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const widgetApiRoutes = require("./routes/widgets-api"); //
const restaurantApi = require("./routes/restaurants-api");
const userApiRoutes = require("./routes/users-api"); //
const statusApi = require("./routes/status-api");
const usersRoutes = require("./routes/users");
const menuApi = require("./routes/menu-api"); // GETS MENU FROM SQL
const userLogin = require("./routes/login");
const logout = require("./routes/logout");
const cartApi = require("./routes/cart-api");
const cart = require("./routes/cart");
const restaurantOrdersApi = require("./routes/restaurant-orders-api");
const userOrderStatus = require("./routes/userOrderStatus-api");
const customerPhoneApi = require("./routes/customerPhone-api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use("/api/restaurants", restaurantApi);
app.use("/api/widgets", widgetApiRoutes);
app.use("/api/users", userApiRoutes);
app.use("/api/status", statusApi);
app.use("/users", usersRoutes);
app.use("/api/menu", menuApi);
app.use("/login", userLogin);
app.use("/logout", logout);
app.use("/api/carts", cartApi);
app.use("/cart", cart);
app.use("/api/restaurant-orders/", restaurantOrdersApi);
app.use("/api/orders/", userOrderStatus);
app.use("/api/customerPhones/", customerPhoneApi);
// Note: mount other resources here, using the same pattern above

/////////////////////ROUTES //////////////////////////////////////////////////

// ----------------------------------------------------------------------------
// Home page

// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  // req.session = null; //delete cookie
  // req.session.user = "SomeUser";
  // req.session.userType = "Admin"; //set random cookie - should be ideally be set username and type on login

  // Access the session cookie
  // console.log(req.session.user);
  // console.log(req.session.userType);
  const templateVars = {
    user: req.session.user,
    userType: req.session.iscustomer,
    userId: req.session.user_id,
  };

  //goes to index regardless of cookie or not for now TODO ADD ERROR HANDLER

  !templateVars.user
    ? res.render("index", templateVars)
    : res.render("index", templateVars);
});

// ----------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////////
////////////////////SERVER LISTENING  WHEN FILE RUN/////////////////////////////
// ----------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
////////////////////////////////////////////////////////////////////////////////
