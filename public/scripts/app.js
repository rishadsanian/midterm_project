/* eslint-disable no-undef */
// Client facing scripts here

// const { load } = require("dotenv");

////////////////////////////////////////////////////////////////////////////////
////                   HUNGRY HUMANS /any company                           ////
///                        FOOD ORDERING APP                               ////
//////////////////////////////////////////////////////////////////////////////

//When dom is ready
$(document).ready(function () {
  //event listeners and jquery constructors here, user flow
  console.log("app script is working");

  // userSessionInformation();

  // fetchUserInfo();
  $(".login-form").hide();
  getMenu();
  if (!user) authenticateUser();

  // if (currentUser) console.log("Current User: ", currentUser);

  console.log(currentUser());

  // if (!isCustomer) renderRestaurantDashboard();
  // renderRestaurantDashboard();
  // loadOrderbyStatus();

  //need to implement

  // CUSTOMER VIEW

  // if (userType === "Admin" || userType === "customer") {
  // renderMenu(menu, categories); //completed
  // }

  //  OWNER VIEW
  // if (userType === "Admin" || userType === "restaurant") {
  //   console.log("menu is only for customers");
  // }
});
