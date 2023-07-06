const twilio = require("twilio");

const accountSid = "AC840a4d6af1ef3c76b749f9a49a5da1b3";
const authToken = "17a7db90f806691f7f4fff139deb8ce3";
// const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

const twilioSMS = (message, customerPhoneNumber) => {
  //asynch functions needed here to fetch restaurant and customer phone numbers first and then send appropriate message
  const client = twilio(accountSid, authToken);
  client.messages
    .create({
      body: message,
      from: "+12058517794",
      to: customerPhoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
};

module.exports = twilioSMS;
