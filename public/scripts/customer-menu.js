/* eslint-disable no-unused-vars */
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

//declare output for cart picing and quantit and subtotal for running totaly////////////////////WILL BE USED FOR POST//////////////////

const orderItems = {};
const subTotalValues = {};
let subTotal = 0;

const updateSubTotalSum = (subTotal) => {
  subTotal += Object.values(subTotalValues).reduce(
    (acc, curr) => acc + curr,
    0
  );
};

////////////////////////////////////////////////////////////////////////////////

//Function to render the menu with abiility for user to add or remove quantities of each item from the menu

const renderMenu = function (menu, categories) {
  // /////////////////// Define CONTAINER ///////////////////////////////
  const $customerContainer = $("#customer-user").css({
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "background-color": "white",
    "font-size": "large",
  });

  /////////////////////////////  title  /////////////////////////////////////
  const $menuTitle = $("<h2>").addClass("section-title").text("Menu");

  //////////////////////////Menu list by Category //////////////////////////////

  // SET EACH CATEGORY CONTAINER  ///This currently is at O n^2. Need to refactor. Via sql and one for loop
  Object.keys(categories).forEach((category) => {
    const $menuListByCategory = $("<article>")
      .addClass(`menu-category`)
      .html(`<strong> ${categories[category]} </strong>`)
      .css({
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        margin: "5%",
      });

    //--------------------------------------------------------------//
    // ADD CONTAINER FOR EACH MENU ITEM IN THE CATEGORY

    menu.forEach((item) => {
      // Keep track of quantity for each item
      orderItems[item.menuItemsId] = 0;

      if (item.category === category) {
        // Create menu item container
        const $item = $("<div>").addClass("menu-item card-hov-shadow").css({
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-around",
          // border: "solid 1px black",
          border: "solid 2px black",
          "border-radius": "7px",
          padding: "1em",
          // padding: "10px",
          margin: "10px 0",
        });

        //--------------------------------------------------------------//

        ////////////Add Header for item name and price
        const $itemHeader = $("<header>")
          .addClass("menu-item card-header")
          .css({ display: "flex", "justify-content": "space-between" });

        // Create menu item name element
        const $itemName = $("<p>")
          .addClass("menu-name")
          .text(item.name)
          .css({ fontWeight: "bold" });

        // Create menu item price element
        const $itemPrice = $("<p>")
          .addClass("menu-price")
          .text("$ " + (item.price / 100).toFixed(2));

        // Add the name and price to card header
        $itemHeader.append($itemName, $itemPrice);

        //--------------------------------------------------------------//
        ////////////////Add Body - For description and image

        const $itemBody = $("<div>").addClass("menu-item card-body").css({
          display: "flex",
          "justify-content": "space-between",
          alignItems: "center",
        });

        // Create menu item description element
        const $itemDescription = $("<p>")
          .addClass("menu-description")
          .text(item.description);

        // Create menu item image element (replace with actual image source)
        const $itemImage = $("<img>") //img tag when picture available
          .addClass("menu-img")
          .text(item.imgUrl)
          .attr("text", item.imgUrl)
          .css({ width: "100px", height: "100px" }); //for img needs to be changed into em...
        // .css({"font-size" : "350%"});

        // Add the description and image to card body
        $itemBody.append($itemDescription, $itemImage);

        //--------------------------------------------------------------//
        /////////////////Add Footer - for adding/removing quantity and quantity amount

        // Create  footer container for the menu item
        const $itemFooter = $("<footer>")
          .addClass("menu-item card-footer")
          .css({
            display: "flex",
            "justify-content": "space-between",
            alignItems: "center",
          });

        // Create the quantity container
        const $quantityContainer = $("<div>").addClass("quantity-container");

        // Create the quantity counter placeholder
        const $quantityLabel = $("<span>").text("Quantity:");
        const $quantityValue = $("<span>").addClass("quantity-value").text("0");

        // Create the add and remove buttons and container
        const $quantityButtonContainer = $("<div>")
          .addClass("quantity-buttons")
          .css({ display: "flex" });

        const $addButton = $("<button>")
          .addClass("add-button")
          .text("Add")
          .on("click", function () {
            //add to quantitiy counter
            orderItems[item.menuItemsId]++;
            $quantityValue.text(orderItems[item.menuItemsId]);
            console.log(orderItems); // LOG

            //Update Subtotal value for each item qty * price
            subTotalValues[item.menuItemsId] =
              orderItems[item.menuItemsId] * item.price;

            console.log(subTotalValues);

            subTotal = Object.values(subTotalValues).reduce(
              (acc, curr) => acc + curr,
              0
            );

            console.log(subTotal);
          });

        const $removeButton = $("<button>")
          .addClass("remove-button")
          .text("Remove")
          .on("click", function () {
            //remove from quantity counter
            if (orderItems[item.menuItemsId]) orderItems[item.menuItemsId]--;
            $quantityValue.text(orderItems[item.menuItemsId]);
            console.log(orderItems); // LOG

            //Update Subtotal value for each item qty * price
            subTotalValues[item.menuItemsId] =
              orderItems[item.menuItemsId] * item.price;

            subTotal = Object.values(subTotalValues).reduce(
              (acc, curr) => acc + curr,
              0
            );

            console.log(subTotal);
          });

        // Add the add and remove buttons and the quantity counter to the item footer
        $quantityButtonContainer.append($addButton, $removeButton);

        $quantityContainer.append($quantityLabel, $quantityValue);

        $itemFooter.append($quantityButtonContainer, $quantityContainer);
        //--------------------------------------------------------------//

        // Add the item header, body, and footer to the menu item container
        $item.append($itemHeader, $itemBody, $itemFooter);

        // Add item to category container
        $menuListByCategory.append($item);
      }
    });

    ////////////////////////////////////////////////////////////////////////////

    //Add menu list to container for each category
    $customerContainer.append($menuListByCategory);
  });

  //Add title
  $customerContainer.prepend($menuTitle);
  ///////////////////////// Checkout Container ///////////////////////////////

  //checkout button and subtotal
  const $checkoutContainer = $("<section>").addClass("checkout-container").css({
    display: "flex",
    "flex-direction": "column",
    'background-color': 'white',
    position: 'sticky',
    bottom: '0'
    
  });

  //checkout button
  const $checkoutButton = $("<button>")
    .addClass("checkout-button")
    .text("Checkout")
    .on("click", function () {
      // neeed route to post to order table /hide menuview and toggle cartview
      console.log("send json object for sql order table");
    });

  const $subTotalElement = $("<p>")
    .addClass("subtotal-element")
    .text("Subtotal: $" + (subTotal / 100).toFixed(2));

  $checkoutContainer.append($checkoutButton, $subTotalElement);

  //Add checkout container
  // if (orderItems)
  $customerContainer.append($checkoutContainer);
};
////////////////////////////////////////////////////////////////////////////////
module.exports = renderMenu();
