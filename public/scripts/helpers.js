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

