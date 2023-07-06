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
  renderPageAndLoadOrders(orders);
  showRestaurants(); // fetchUserInfo();
  getCart();

  // getUserSessionData()
  //   .done(function (response) {
  //     const userId = response.userId;
  //     const firstName = response.firstName;
  //     const isCustomer = response.isCustomer;

  //     console.log(userId);
  //     console.log(firstName);
  //     console.log(isCustomer);

  // fetchUserInfo();

  // getUserSessionData();

  // if (!user) authenticateUser();

  // if (currentUser) console.log("Current User: ", currentUser);

  // console.log(currentUser());

  // if (!isCustomer) renderRestaurantDashboard();
  // renderRestaurantDashboard();
  // loadOrderbyStatus();
});
