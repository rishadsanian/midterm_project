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
  $(".menu-container").toggle();
  $(".restaurants-container").toggle();
  $(".restaurants-user").toggle();

  showLoginForm();
  if (user) {
    if (userType === "restaurant") {
      $(".restaurants-user").toggle();
      renderPageAndLoadOrders(orders);
    }
    if (userType === "customer") {
      $(".restaurants-container").toggle();
      showRestaurants();
    }
  }
});
