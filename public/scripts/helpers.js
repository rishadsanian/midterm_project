/* eslint-disable no-undef */
//functions  that can be made in to their own files for modularity

//TOGGLE/LOAD CUSTOMER SECTION *IF COOKIE SESSION USERTYPE = CUSTOMER

//TOGGLE/LOAD RESTAURANT OWNER SECTION *IF COOKIE SESSION USERTYPE = RESTAURANT OWNER

//////////////////////////////////LOAD MENU example data in nosql///////////////
const categories = {
  1: "Appetizers",
  2: "Entrees",
  3: "Beverages",
  4: "Deserts",
};
const menu = [
  { menuItemsId: 1, restaurantId: 1, name: "Fries", category: "1", price: 600 },
  { menuItemsId: 2, restaurantId: 1, name: "Salad", category: "1", price: 800 },
  {
    menuItemsId: 3,
    restaurantId: 1,
    name: "Burger",
    category: "2",
    price: 1500,
  },
  { menuItemsId: 4, restaurantId: 1, name: "Ribs", category: "2", price: 2500 },
  {
    menuItemsId: 5,
    restaurantId: 1,
    name: "Coffee",
    category: "3",
    price: 200,
  },
  { menuItemsId: 6, restaurantId: 1, name: "Soda", category: "3", price: 150 },
  {
    menuItemsId: 7,
    restaurantId: 1,
    name: "Cheesecake",
    category: "4",
    price: 800,
  },
  {
    menuItemsId: 8,
    restaurantId: 1,
    name: "Ice Cream",
    category: "4",
    price: 500,
  },
];

//note that when using sql for getting data it has to go through route and then ajaxrequst to receive the data in JSON format.

// const getMenu = function () {
//   $.ajax({
// url: "/menu-api",
//     method: "GET",
//     dataType: "json",
//     success: function (data) {
//       renderMenu(data);
//     },
//   });
// };

// temp css below SHOULD BE to be moved into scss file

const renderMenu = function (menu, categories) {
  // IDENTIFY CONTAINER
  const $customerContainer = $("#customer-user").css({
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
  });

  // Set title

  const $menuTitle = $("<h2>").addClass("section-title").text("Menu");

  // SET EACH CATEGORY CONTAINER
  Object.keys(categories).forEach((category) => {
    const $category = $("<article>")
      .addClass("menu-category")
      .html(`<strong> ${categories[category]} </strong>`)
      .css({
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
      });

    // ADD EACH MENU ITEM FOR THE CATEGORY
    menu.forEach((item) => {
      if (item.category === category) {
        // Create menu item container
        const $item = $("<div>")
          .addClass("menu-item")
          .css({ display: "flex", "justify-content": "space-between" });

        // Create menu item name element
        const $itemName = $("<p>").addClass("menu-name").text(item.name);

        // Create menu item price element
        const $itemPrice = $("<p>")
          .addClass("menu-price")
          .text("$ " + (item.price / 100).toFixed(2));

        //Add the name and price to item container
        $item.append($itemName, $itemPrice);

        
        //TODO Create add, remove button and display quantity sectionwith submit functionality


        // add item to catgory container
        $category.append($item);
      }
    });

    $customerContainer.append($category);
    $customerContainer.prepend($menuTitle);
  });
};
