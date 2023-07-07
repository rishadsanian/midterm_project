/* eslint-disable no-undef */
// Client facing scripts here

// const { load } = require("dotenv");

////////////////////////////////////////////////////////////////////////////////
////                          FEED HUNGRY                                   ////
///                        FOOD ORDERING APP                               ////
//////////////////////////////////////////////////////////////////////////////

//When dom is ready
$(document).ready(function () {
  // showOrders();
  // setInterval(fetchOrders, 10000)
  //event listeners and jquery constructors here, user flow
  console.log("app script is working");
  smoothScrollToMain();
  $(".menu-container").toggle();
  $(".restaurants-container").toggle();
  $(".restaurants-user").toggle();
  $(".cart-container").toggle();
  
  showLoginForm();
  if (user) {
    if (userType === "restaurant") {
      $(".restaurants-user").toggle();
      showOrders();
  
    }
    if (userType === "customer") {
      $(".restaurants-container").toggle();
      showRestaurants();
    }
  }
});
