/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//

// const twilio = require("twilio");

// const accountSid = "AC840a4d6af1ef3c76b749f9a49a5da1b3";
// const authToken = "17a7db90f806691f7f4fff139deb8ce3";
// const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

// const twilloSMS = (message, restaurantPhoneNumber, customerPhoneNumber) => {
//   //asynch functions needed here to fetch restaurant and customer phone numbers first and then send appropriate message
//   client.messages
//     .create({
//       body: message,
//       from: restaurantPhoneNumber,
//       to: customerPhoneNumber,
//     })
//     .then((message) => console.log(message.sid))
//     .catch((error) => console.error(error));
// };

// //can be made  in to two functions orderReceived and orderReady with different messages

// const getUserSessionData = () => {
//   return $.ajax({
//     url: "/api/sessionData",
//     method: "GET",
//     dataType: "json"
//   });
// };

// module.exports = twilloSMS;

const smoothScrollToMain = function () {
  $(".scroll-to-main").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#main").offset().top,
      },
      800
    );
  });
};

const getCartId = function(user) {
  let date = new Date();
  let cartId = string(user) + "-" + string(date);
  return cartId;
};



// const addOrder = (cart) => {
//   //destructure keys and values into arrays
//   const columns = Object.keys(order);
//   const values = Object.values(order);
//   const placeholders = [];
  
//   //placeholders for parameterized queries
//   for (let i = 0; i < values.length; i++) {
//     placeholders.push(`$${i + 1}`);
//   }

//   //queryString
//   const qs = `
//     INSERT INTO properties (${columns.join(", ")})
//     VALUES (${placeholders.join(", ")})
//     RETURNING *;
//   `;

//   return pool
//     .query(qs, values)
//     .then((result) => {
//       return result.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };
