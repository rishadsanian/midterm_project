/* eslint-disable no-undef */
//functions  that can be made in to their own files for modularity

//TOGGLE/LOAD CUSTOMER SECTION *IF COOKIE SESSION USERTYPE = CUSTOMER

//TOGGLE/LOAD RESTAURANT OWNER SECTION *IF COOKIE SESSION USERTYPE = RESTAURANT OWNER

//////////////////////////////////LOAD MENU example data in nosql///////////////
const categories = {
  1: "Appetizers",
  2: "Entrees",
  3: "Beverages",
  4: "Desserts",
};
const menu = [
  {
    menuItemsId: 1,
    restaurantId: 1,
    name: "Fries",
    category: "1",
    price: 600,
    description: "Homemade Fresh cut Fries",
    imgUrl: "🍟",
  },
  {
    menuItemsId: 2,
    restaurantId: 1,
    name: "Salad",
    category: "1",
    price: 800,
    description: "Fresh garden Salad",
    imgUrl: "🥗",
  },
  {
    menuItemsId: 3,
    restaurantId: 1,
    name: "Burger",
    category: "2",
    price: 1500,
    description: "Juicy 8 oz with cheddar and all the works",
    imgUrl: "🍔",
  },
  {
    menuItemsId: 4,
    restaurantId: 1,
    name: "Ribs",
    category: "2",
    price: 2500,
    description: "Fall of the bone beef ribs with bold smokey bbq sauce",
  },
  {
    menuItemsId: 5,
    restaurantId: 1,
    name: "Coffee",
    category: "3",
    price: 200,
    imgUrl: "☕",
  },
  { menuItemsId: 6, restaurantId: 1, name: "Soda", category: "3", price: 150 },
  {
    menuItemsId: 7,
    restaurantId: 1,
    name: "Cheesecake",
    category: "4",
    price: 800,
    description: "Melt in your mouth cheesecake",
    imgUrl: "🍰",
  },
  {
    menuItemsId: 8,
    restaurantId: 1,
    name: "Ice Cream",
    category: "4",
    price: 500,
    description: "Melt if you don't eat it",
    imgUrl: "🍦",
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

//declare output for cart picing and quantity////////////////////WILL BE USED FOR POST//////////////////

const orderItems = {};
////////////////////////////////////////////////////////////////////////////////

//Function to render the menu with abiility for user to add or remove quantities of each item from the menu

const renderMenu = function (menu, categories) {
  // IDENTIFY CONTAINER
  const $customerContainer = $("#customer-user").css({
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "background-color": "white",
    "font-size": "large",
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
        margin: "5%",
      });

    // ADD EACH MENU ITEM FOR THE CATEGORY
    menu.forEach((item) => {
      //keep track of quantity for each item
      orderItems[item.menuItemsId] = 0;

      if (item.category === category) {
        // Create menu item container
        const $item = $("<div>").addClass("menu-item card").css({
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-arpimd",
          border: "solid 1px black",
        });

        ////////////Add Header for item name and price

        const $itemHeader = $("<header>")
          .addClass("menu-item card-header")
          .css({ display: "flex", "justify-content": "space-between" });

        // Create menu item name element
        const $itemName = $("<p>").addClass("menu-name").text(item.name);

        // Create menu item price element
        const $itemPrice = $("<p>")
          .addClass("menu-price")
          .text("$ " + (item.price / 100).toFixed(2));

        //Add the name and price to card header
        $itemHeader.append($itemName, $itemPrice);

        ////////////////Add Body - For description and image

        const $itemBody = $("<div>").addClass("menu-item card-body").css({
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        });

        // Create menu item name element
        const $itemDescription = $("<p>")
          .addClass("menu-description")
          .text(item.description);

        // Create menu item image element THIS HAS TO BE CHANGED TO SHOW IMG BACKGROUND WITH FOOD IMAGE IN SRC

        const $itemImage = $("<p>")
          .addClass("menu-img")
          .text(item.imgUrl)
          .css({ "font-size": "400%" });

        // Add the descrition and image into card body
        $itemBody.append($itemDescription, $itemImage);

        /////////////////Add Footer - for adding/removing quantity and quantity amount
        // Create the footer section for the menu item
        const $itemFooter = $("<footer>")
          .addClass("menu-item card-footer")
          .css({ display: "flex", "justify-content": "space-between" });

        // Create  quantity  container
        const $quantityContainer = $("<div>").addClass("quantity-container");

        // Create  quantity counter placeholder
        const $quantityLabel = $("<span>").text("Quantity:");
        const $quantityValue = $("<span>").addClass("quantity-value").text("0");

        // Create the add and remove buttons and container
        const $quantityButtonContainer = $("<div>")
          .addClass("quantity-buttons")
          .addClass({ display: "flex" });

        const $addButton = $("<button>")
          .addClass("add-button")
          .text("Add")
          .on("click", function () {
            orderItems[item.menuItemsId]++;
            $quantityValue.text(orderItems[item.menuItemsId]);
          });

        const $removeButton = $("<button>")
          .addClass("remove-button")
          .text("Remove")
          .on("click", function() {
            if (orderItems[item.menuItemsId]) orderItems[item.menuItemsId]--;
            $quantityValue.text(orderItems[item.menuItemsId]);
          });

        $quantityButtonContainer.append($addButton, $removeButton);

        $quantityContainer.append($quantityLabel, $quantityValue);

        // Add the add and remove buttons and the quantity counter to the item footer
        $itemFooter.append($quantityButtonContainer, $quantityContainer);

        // Add the item footer to the menu item container
        $item.append($itemHeader, $itemBody, $itemFooter);
        // add item to catgory container
        $category.append($item);
      }
    });

    $customerContainer.append($category);
    $customerContainer.prepend($menuTitle);
  });
};

//////////////////////////////////LOAD MENU example data in nosql///////////////
