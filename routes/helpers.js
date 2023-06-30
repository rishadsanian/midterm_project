const twilio = require("twilio");
const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";
const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

const twilloSMS = (message, restaurantPhoneNumber, customerPhoneNumber) => {
  client.messages
    .create({
      body: message,
      from: restaurantPhoneNumber,
      to: customerPhoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
};

module.exports = twilloSMS;
