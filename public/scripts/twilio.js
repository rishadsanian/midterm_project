// const twilio = require("twilio");

// const accountSid = "";
// const authToken = "";
// // const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

// const twilioSMS = (message, customerPhoneNumber) => {
//   //asynch functions needed here to fetch restaurant and customer phone numbers first and then send appropriate message
//   const client = twilio(accountSid, authToken);
//   client.messages
//     .create({
//       body: message,
//       from: "",
//       to: customerPhoneNumber,
//     })
//     .then((message) => console.log(message.sid))
//     .catch((error) => console.error(error));
// };

// module.exports = twilioSMS;
