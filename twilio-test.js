const twilio = require("twilio");

const accountSid = "AC840a4d6af1ef3c76b749f9a49a5da1b3";
const authToken = "17a7db90f806691f7f4fff139deb8ce3";
const client = twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Twilio!",
    from: "+12058517794",
    to: "+16477611907",
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));
