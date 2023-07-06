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
  smoothScrollToMain();
  
  showLoginForm();
  if (userType === "restaurant") renderPageAndLoadOrders(orders);
  if (userType === "customer") showRestaurants();

  // fetchUserInfo();

  // getUserSessionData();

  // if (!user) authenticateUser();

  // if (currentUser) console.log("Current User: ", currentUser);

  // console.log(currentUser());

  // if (!isCustomer) renderRestaurantDashboard();
  // renderRestaurantDashboard();
  // loadOrderbyStatus();
});
