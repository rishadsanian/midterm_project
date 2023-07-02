/* eslint-disable no-undef */
// Client facing scripts here

const { load } = require("dotenv");

////////////////////////////////////////////////////////////////////////////////
////                   HUNGRY HUMANS /any company                           ////
///                        FOOD ORDERING APP                               ////
//////////////////////////////////////////////////////////////////////////////

//When dom is ready
$(document).ready(function () {
  //event listeners and jquery constructors here, user flow
  console.log("app script is working");

  // userSessionInformation();
  console.log("User: " + user);
  console.log("User Type: " + userType);
  // renderUserAuthentication();


  
  if (!user) {
    // renderUserAuthentication();
    renderUserLogin(); //need to implement toggle on or load
    renderCreateUser();//need to implement toggle on or load
  }

  if (isCustomer) {
    renderCustomerMain();//need to implement
    getMenu();
    showCart();//need to implement
    getStatus();
  }

  if (!isCustomer) renderRestaurantDashboard();
  renderRestaurantDashboard();
  loadOrderbyStatus();

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
