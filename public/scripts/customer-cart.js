/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//mount all customer functions here
// const {renderMenu} = require('./customer-menu');

// renderMenu();

// const getCart = (id) => {
//   $.get("/api/cart/", function (data) {
//     console.log(data);
//     const orderItems = data.order_items;
//     console.log(order_items);

//     // for (const location of restaurants) {
//     //   console.log(location.restaurant_id);
//     // }

//     renderOrderItems(order_items);
//   }).fail(function (xhr, status, error) {
//     // redirect to /error -> error.ejs
//     console.log(error);
//   });
// };

const renderOrderItems = function (orderItems) {
  const $cartContainer = $(".cart-container");
  $cartContainer.empty(); // Clear any existing content

  const $cartTitle = $("<h2>").addClass("section-title").text("Your cart");

  $cartContainer.append($cartTitle);

  for (const orderItem of orderItems) {
    const $orderItem = $("<div>").addClass(
      `orderItem-${orderItem.id} card-hov-shadow `
    ); //=> this orderItem.id needs to be change to random generated ID with cookies info
    // .css({
    //   display: "flex",
    //   "flex-direction": "column",
    //   "justify-content": "space-around",
    //   "background-color": "white",
    //   "font-size": "large",
    //   width: "50vw",
    //   border: "solid 1px black",
    //   "border-radius": "7em",
    //   padding: "2.5em",
    //   margin: "10px 0",
    //   overflow: "hidden",
    // });

    const $itemPicture = $("<img>")
      .addClass("itemPciture")
      .attr("src", orderItem.picture_url)
      .css({ width: "100px", height: "100px" });

    const $itemQuantity = $("<p>")
      .addClass("itemQuantity")
      .text(orderItem.quantity);

    const $orderItemName = $("<p>")
      .addClass("itemName")
      .text(orderItem.name)
      .css({ fontWeight: "bold" });

    const $itemUnitPrice = $("<p>")
      .addClass("unitPrice")
      .text("$ " + (orderItem.unit_price / 100).toFixed(2));

    const $orderItemBody = $("<body>")
      .addClass("ordertem card-body")
      .css({ display: "flex", "justify-content": "space-between" });

    $orderItemBody.append(
      $itemPicture,
      $itemQuantity,
      $orderItemName,
      $itemUnitPrice
    );
    $orderItem.append($orderItemBody);

    $cartContainer.append($orderItem);

    const $confirmationButton = $("<button>")
      .addClass("confirmation-button")
      .text("confirm");

    $confirmationButton.on("click", function () {
      $cartContainer.hide();

      console.log("order sent");
    });

    const cartTotal = function (order_items) {
      let total = 0;
      order_items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    };

    const $cartTotal = $("<p>")
      .addClass("cartTotal")
      .text("$ " + cartTotal);

    const $orderItemFooter = $("<footer>")
      .addClass("orderItem card-footer")
      .css({
        display: "flex",
        "justify-content": "space-between",
        alignItems: "center",
      });

    $orderItemFooter.append($confirmationButton, $cartTotal);
    $cartContainer.append($orderItemFooter);
  }
};
