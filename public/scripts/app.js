/* eslint-disable no-undef */
// Client facing scripts here

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


  if (!user) renderUserAuthentication();
  if (isCustomer) renderCustomerMain();
  if (!isCustomer) renderRestaurantDashboard();

  


  // CUSTOMER VIEW

  getMenu();

  
  // if (userType === "Admin" || userType === "customer") {
  // renderMenu(menu, categories); //completed
  // }

  //  OWNER VIEW
  // if (userType === "Admin" || userType === "restaurant") {
  //   console.log("menu is only for customers");
  // }
});
