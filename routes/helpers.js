const express = require("express");
const router = express.Router();
const db = require("../db/connection");



// router.post("/cart", (req, res) => {
//   const newCart = req.body;
//   // eslint-disable-next-line camelcase
//   db
//     .addOrder(newCart)
//     .then((cart) => {
//       res.send(cart);
//     })
//     .catch((e) => {
//       console.error(e);
//       res.send(e);
//     });
// });

module.exports = router;

const addOrder = (cart) => {
  //destructure keys and values into arrays
  const columns = Object.keys(cart);
  const values = Object.values(cart);
  const placeholders = [];
  
  //placeholders for parameterized queries
  for (let i = 0; i < values.length; i++) {
    placeholders.push(`$${i + 1}`);
  }

  //queryString
  const qs = `
    INSERT INTO orders (${columns.join(", ")})
    VALUES (${placeholders.join(", ")})
    RETURNING *;
  `;

  return db
    .query(qs, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// module.exports = {addOrder};


// const twilio = require("twilio");

// const accountSid = "AC840a4d6af1ef3c76b749f9a49a5da1b3";
// const authToken = "17a7db90f806691f7f4fff139deb8ce3";
// // const client = twilio(accountSid, authToken); //needs to be filled out from twillo account

// const twilioSMS = (message, customerPhoneNumber) => {
//   //asynch functions needed here to fetch restaurant and customer phone numbers first and then send appropriate message
//   const client = twilio(accountSid, authToken);
//   client.messages
//     .create({
//       body: message,
//       from: "+12058517794",
//       to: customerPhoneNumber,
//     })
//     .then((message) => console.log(message.sid))
//     .catch((error) => console.error(error));
// };

// module.exports = twilioSMS;
