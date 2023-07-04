// QUERY FUNCTIONS//Can be organized in seperate files in the folder
const db = require("../connection");


///////////CUSTOMER////////////////
//get menu//
//route through menuapi

// const getMenu = (restaurantId) => {
//   return db.query('SELECT * FROM menu_items WHERE restaurant_id = 1;')
//     .then(data => {
//       return data.rows;
//     });
// };



// /////////////////////////////////////////////////////////

// //get cart summary the two below could be combined
// //needed for cart view with running subtotal calculated
// const getCartSummary = (orderId) =>{};


//on Checkout will show subtotal [STRETCH taxes(by province using another table for provincial tax rates based on address), tips and grand total]
////////////////////

//STRETCH addNote for special requests on the order

//const createOrder (orderitemsid) (placeOrder will be a script function)
//to set the order will include table items for restaurant to view including and set into the orders table



/////////////////////////////////////////////////////////

/////////RESTAURANT////////////////

//set estimatedtime

// const getOrderDetails - will include settime

//getNewOrders
//getOrdersInProgreess
//getPreparedOrders
//getCompletedOrders


/////////////////////////

// const setStatus = (x) => {};



// const showStatus


// const timerInfo;


//getReceipt - to show on confirmation when order is completed STRETCH SEND TWILLO EMAIL OR ACCESS TO PREVIOUS ORDERS




//OTHER STRETCH queries for functionality

//
// getPreviousOrders(userId)

// showallOrders(restaurantId) - for restaurant

// showPopularOrders

// setRestaurantRating

// getUserbyId include restaurant owner or customer

// showNearbyRestaurants

// createNewUser

//getReceipt

//createNewRestaurant

//updateMenu

//createMenu

//updateAddress


// module.exports = {getMenu};