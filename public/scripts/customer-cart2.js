/* eslint-disable no-undef */
/* eslint-disable camelcase */

const showCart = (cart) => {
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
    const { menu_item_id, quantity, unit_price } = order;
    const total = quantity * unit_price;
    totalPrice += total;

    const $row = $("<tr>");
    $row.append(`<td>Item ${menu_item_id}</td>`);
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
      placeOrder(cart);
      // Handle the place order functionality here
      console.log("Place Order button clicked");
      // You can add your logic for placing the order, such as making an API request or performing any other necessary actions.
    });

  // Append the table to the document body
  $(".cart-container").append($table, $placeOrderButton);
};

const placeOrder = (cart) =>
  $.post("/cart", cart, function (response) {
    console.log(response);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });


//   {
//     "customer_id": "3",
//     "restaurant_id": 1,
//     "menu_item_id": "3",
//     "status_id": 1,
//     "quantity": 1,
//     "unit_price": 1860,
//     "ordered_time": "2023-07-06T06:14:02.397Z",
//     "cart_id": "3-1688624042397"
// }

  

