/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//



//can be made  in to two functions orderReceived and orderReady with different messages

const getUserSessionData = () => {
  return $.ajax({
    url: "/api/sessionData",
    method: "GET",
    dataType: "json",
  });
};

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

const getCartId = function (user) {
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

