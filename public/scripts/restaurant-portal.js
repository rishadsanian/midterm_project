/* eslint-disable no-undef */
//page component

// fake order
const orders = {
  newOrders: [
    { id: 1, name: "Order 1", },
    { id: 2, name: "Order 2", },
  ],
  preparing: [
    { id: 3, name: "Order 3" },
    { id: 4, name: "Order 4" },
  ],
  completed: [
    { id: 5, name: "Order 5" },
    { id: 6, name: "Order 6" },
  ],
  pickedUp: [
    { id: 7, name: "Order 7" },
    { id: 8, name: "Order 8" },
  ],
};

const renderPageAndLoadOrders = (orders) => {
  createPortal(); // Render the page

  setTimeout(() => {
    loadAllOrders(orders); // Load all the orders
  }, 0);
};

// load each order
const loadOrders = function (columnId, orders) {
  const $column = $("." + columnId); //figureout  class for column
  const $orderList = $column.find(".order-list");

  $orderList.empty();

  orders.forEach(function (order) {
    const $orderItem = $("<li>").text(order.name);
    $orderList.append($orderItem);
    console.log('order loaded: ', order.name);
  });
};

const loadAllOrders = function (orders) {
  Object.entries(orders).forEach(([columnId, columnOrders]) => {
    loadOrders(columnId, columnOrders);
    console.log('all orders loaded');
  });
};
const createPortal = () => {
  
  const $ordersContainer = $("<div>").addClass("orders-container");
  const $h1 = $("<h1>").text("Order Management Portal");
  const $orderStatusColumns = $("<div>").addClass("order-status-columns");

  const $newOrdersColumn = $("<div>")
    .addClass("column")
    .attr("id", "new-orders-column");
  const $newOrdersHeading = $("<h2>").text("New Orders");
  const $newOrdersList = $("<ul>").addClass("order-list");
  $newOrdersColumn.append($newOrdersHeading, $newOrdersList);

  const $preparingColumn = $("<div>")
    .addClass("column")
    .attr("id", "preparing-column");
  const $preparingHeading = $("<h2>").text("Preparing");
  const $preparingList = $("<ul>").addClass("order-list");
  $preparingColumn.append($preparingHeading, $preparingList);

  const $completedColumn = $("<div>")
    .addClass("column")
    .attr("id", "completed-column");
  const $completedHeading = $("<h2>").text("Completed");
  const $completedList = $("<ul>").addClass("order-list");
  $completedColumn.append($completedHeading, $completedList);

  const $pickedUpColumn = $("<div>")
    .addClass("column")
    .attr("id", "picked-up-column");
  const $pickedUpHeading = $("<h2>").text("Picked Up");
  const $pickedUpList = $("<ul>").addClass("order-list");
  $pickedUpColumn.append($pickedUpHeading, $pickedUpList);

  $orderStatusColumns.append(
    $newOrdersColumn,
    $preparingColumn,
    $completedColumn,
    $pickedUpColumn
  );

  $ordersContainer.append($h1, $orderStatusColumns);
  $(".restaurant-user").append($ordersContainer);
};

