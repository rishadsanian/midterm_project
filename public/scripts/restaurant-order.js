/* eslint-disable no-undef */
/* eslint-disable camelcase */

// /const { response } = require("express");
// const twilio = require("twilio");

const showOrders = () =>
  $.get("/api/restaurant-orders/1", function (orderList) {
    console.log("logging response from route", orderList);
    const { orders } = orderList;
    console.log("Logging orders: ", orderList);
    renderOrders(orders);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });
const renderOrders = (orders) => {
  console.log("orders in renderOrders", orders);
  // $(".order-container").slideToggle();

  orders.forEach((order) => {
    const $card = $("<div>").addClass("order-card");
    $card.css({
      border: "1px solid black",
    });

    const keys = Object.keys(order);
    keys.forEach((key) => {
      let value = order[key];
      if (key === "status_id") {
        // Map specific values for status_id
        switch (value) {
          case 1:
            value = "New order";
            break;
          case 2:
            value = "Prepared";
            break;
          case 3:
            value = "Completed";
            break;
          case 4:
            value = "Picked up";
            break;
          case 5:
            value = "Cancelled";
            break;
          default:
            break;
        }
      }

      const $pairElement = $("<p>")
        .addClass("order-pair")
        .text(`${key}: ${value}`);
      $card.append($pairElement);
    });

    $(".order-container").append($card);
  });
};

// Append the table components to the table
// $table.append($thead);
// $table.append($tbody);

// const $placeOrderButton = $("<button>")
//   .addClass("complete-order")
//   .text("Complete")
//   .on("click", function () {
//     console.log("From Ajax Request", order);
//     console.log("Place Order button clicked");
//     // return;'
//     completeOrder(order)
//       .then(function () {
//         // $statusContainer = $("<div>")
//         //   .addClass("status-container")
//         //   .html(
//         //     `<p>Status:${showStatus(
//         //       cart.cart_id,
//         //       (status_id, estimated_time) => {
//         //         statusMessage(status_id, estimated_time);
//         //       }
//         //     )}</p>`
//         //   );
//         // // Update the status container in the DOM
//         // $(".status-container").replaceWith($statusContainer);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });

// // $table.append($placeOrderButton);
// $(".order-container").empty().append($table);
// };

//
