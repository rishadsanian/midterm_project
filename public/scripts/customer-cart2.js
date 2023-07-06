/* eslint-disable no-undef */
/* eslint-disable camelcase */

// const { response } = require("express");


const placeOrder = (cart) =>
  $.post("/cart", { cart }, function (response) {
    console.log("Cart in Callback function", cart);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });

const showCart = (cart) => {
  console.log("cart in showCart", cart);
  $(".menu-container").slideToggle();
  const $table = $("<table>");
  const $thead = $("<thead>");
  const $tbody = $("<tbody>");

  // Create table header
  const $headerRow = $("<tr>");
  $headerRow.append("<th>Item</th>");
  $headerRow.append("<th>Quantity</th>");
  $headerRow.append("<th>Unit Price</th>");
  $headerRow.append("<th>Total Price</th>");
  $thead.append($headerRow);

  // Create table rows
  let totalPrice = 0;
  cart.forEach((order) => {
    const { menu_item_id, quantity, unit_price, item_name } = order;
    const total = quantity * unit_price;
    totalPrice += total;

    const $row = $("<tr>");
    $row.append(`<td>${item_name}</td>`);
    $row.append(`<td>${quantity}</td>`);
    $row.append(`<td>$${(unit_price / 100).toFixed(2)}</td>`);
    $row.append(`<td>$${(total / 100).toFixed(2)}</td>`);
    $tbody.append($row);
  });

  // Create table footer with total price
  const $footerRow = $("<tr>");
  $footerRow.append("<td colspan='3' style='text-align: right;'>Total:</td>");
  $footerRow.append(`<td>$${(totalPrice / 100).toFixed(2)}</td>`);
  $tbody.append($footerRow);

  // Append the table components to the table
  $table.append($thead);
  $table.append($tbody);

  const $placeOrderButton = $("<button>")
    .addClass("place-order-button")
    .text("Confirm")
    .on("click", function () {
      console.log("From Ajax Request", cart);
      console.log("Place Order button clicked");
      // return;'
      placeOrder(cart)
        .then(function () {
          // $statusContainer = $("<div>")
          //   .addClass("status-container")
          //   .html(
          //     `<p>Status:${showStatus(
          //       cart.cart_id,
          //       (status_id, estimated_time) => {
          //         statusMessage(status_id, estimated_time);
          //       }
          //     )}</p>`
          //   );
          // // Update the status container in the DOM
          // $(".status-container").replaceWith($statusContainer);
        })
        .catch(function (error) {
          console.log(error);
        });
    });

  let $statusContainer = $("<div>")
    .addClass("status-container")
    .html(`<p>Status: Order placed </p>`);

  // Append the table and place order button to the DOM
  $table.append($placeOrderButton, $statusContainer);
  $(".cart-container").empty().append($table);
};

const showOrderDetails = (cart_id, callback) => {
  $.get(`/api/orders/${cart_id}`, function (data) {
    console.log("in show status:", { data });
    const { order } = data;
    const { status_id, estimated_time, customer_phone } = order; //add restaurant and customer phone number
    console.log(status_id, estimated_time, customer_phone);
    callback(status_id, estimated_time);
  }).fail(function (xhr, status, error) {
    console.log(error);
  });
};
//Message for Customer and TwilloSMS;
// const statusMessagetoRestaurant(, estimated_time)

const statusMessage = (status_id, estimated_time) => {
  if (status_id === 1) {
    const message = "Order Placed. Waiting for the restaurant to accept.";
    const messageForRestaurant = "New Order, please check the portal";
    // twilioSMS(messageForRestaurant, restaurantPhoneNumber);
  }

  if (status_id === 2) {
    const message = `Order Accepted. Waiting for the restaurant to prepare your order. Estimated Time: ${estimated_time}. We will send you a confirmation on your phone when your order is ready for pickup.`;
    // twilioSMS(message, customerPhoneNumber);
  }

  if (status_id === 3) {
    const message = "Order ready for pickup!";
    // twilioSMS(message, restaurantPhoneNumber, customerPhoneNumber);
  }

  return message;
};

//
