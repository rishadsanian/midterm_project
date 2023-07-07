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
  console.log("order in showOrder", orders);
  $(".order-container").slideToggle();
  const $table = $("<table>").addClass("order-table");
  
  // Create table rows
  const keys = Object.keys(orders[0]);

  for (let key of keys) {
    const $row = $("<tr>");
    const $keyCell = $("<td>").addClass("order-key").text(`${key} : `);
    const $valueCell = $("<td>")
      .addClass("order-value")
      .text(`${orders[0][key]}`);
    $row.append($keyCell, $valueCell);
    $table.append($row);
  }

  // Append the table to the order-container
  $(".order-container").append($table);

  // const $row = $("<tr>");
  // $row.append(`<td>${ordered_time}</td>`);
  // $row.append(`<td>${item_name}</td>`);
  // $row.append(`<td>${quantity}</td>`);
  // $row.append(`<td>${orders[0][order]}</td>`);

  // $tbody.append($row);
  
  // const $footerRow = $("<tr>");
  // $footerRow.append(`<td>${customer_name}</td>`);
  // const $table = $("<table>");
  // const $thead = $("<thead>");
  // const $tbody = $("<tbody>");
  
  // Create table header
  // const $headerRow = $("<tr>");
  // $headerRow.append("<th>Order Time</th>");
  // $headerRow.append("<th>Item Name</th>");
  // $headerRow.append("<th>Quantity</th>");
  
  // $thead.append($headerRow);
  
  // Create table
  // $footerRow.append(`<td>${user_phone}</td>`);
  // $tbody.append($footerRow);
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
