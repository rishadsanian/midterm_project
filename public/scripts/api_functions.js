const twilio = require("twilio");
const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";
const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

const twilloSMS = (message, restaurantPhoneNumber, customerPhoneNumber) => {
  //asynch functions needed here to fetch restaurant and customer phone numbers first and then send appropriate message
  client.messages
    .create({
      body: message,
      from: restaurantPhoneNumber,
      to: customerPhoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
};

//can be made  in to two functions orderReceived and orderReady with different messages

module.exports = twilloSMS;
