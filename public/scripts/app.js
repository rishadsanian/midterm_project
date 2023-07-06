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

  showLoginForm();
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

  // Continue working with the session data here
  //   })
  //   .fail(function (xhr, status, error) {
  //     console.error(error); // Handle the error if the AJAX request fails
  //   });

  // getUserSessionData();

  // getMenu("1");
  // if (!user) authenticateUser();

  // if (currentUser) console.log("Current User: ", currentUser);

  // console.log(currentUser());

  // if (!isCustomer) renderRestaurantDashboard();
  // renderRestaurantDashboard();
  // loadOrderbyStatus();

  //need to implement

  // CUSTOMER VIEW

  //  OWNER VIEW
  // if (userType === "Admin" || userType === "restaurant") {
  //   console.log("menu is only for customers");
  // }
});
