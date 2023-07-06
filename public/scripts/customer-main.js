/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//mount all customer functions here
// const {renderMenu} = require('./customer-menu');


const showRestaurants = () => {
//get all restaurants
  $.get("/api/restaurants", function (data) {
  
    const restaurants = data.restaurants;
  
    renderRestaurants(restaurants);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });
};

//construct the page
const renderRestaurants = function (restaurants) {
  const $restaurantsContainer = $(".restaurants-container");
  $restaurantsContainer.empty(); // Clear any existing content

  const $restuarantsTitle = $("<h2>")
    .addClass("section-title")
    .text("Restaurants Near You");

  $restaurantsContainer.append($restuarantsTitle);

  for (const location of restaurants) {
    const $location = $("<div>")
      .addClass(`location-${location.id} card-hov-shadow `);

    const $locationHeader = $("<header>")
      .addClass("location card-header")
      .css({ display: "flex", "justify-content": "space-between" });

    const $locationName = $("<p>")
      .addClass("location-name")
      .text(location.name)
      .css({ fontWeight: "bold" });

    $locationHeader.append($locationName);
    $location.append($locationHeader);

    const $locationBody = $("<div>").addClass("location-item card-body").css({
      display: "flex",
      "justify-content": "space-between",
      'flex-wrap': 'wrap',
      'align-items': "center"
    });

    const $locationAddress = $("<div>")
      .addClass("location-address")
      .html(
        `<p>${location.road}</p>
         <p>${location.city}</p>`
      )
      .css({ display: "flex", "flex-direction": "column" });

    const $locationImage = $("<img>")
      .addClass("location-img")
      .attr("src", location.picture_url)
      .css({ width: "100px", height: "100px" });

    $locationBody.append($locationAddress, $locationImage);
    $location.append($locationBody);

    const $locationFooter = $("<footer>").addClass("location card-footer").css({
      display: "flex",
      "justify-content": "space-between",
      alignItems: "center",
    });

    $location.append($locationFooter);
    $location.on("click", () => {
      getMenu(location.id);
      $restaurantsContainer.hide();
    });

    $restaurantsContainer.append($location);
  }
};
