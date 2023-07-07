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
// Construct the page
const renderRestaurants = function(restaurants) {
  const $restaurantsContainer = $(".restaurants-container");
  $restaurantsContainer.empty(); // Clear any existing content

  const $restaurantsTitle = $("<h2>")
    .addClass("section-title")
    .text("Restaurants Near You");

  $restaurantsContainer.append($restaurantsTitle);

  for (const location of restaurants) {
    const $location = $("<div>").addClass("location card-hov-shadow");

    const $locationHeader = $("<div>").addClass("location-header");
    const $locationImage = $("<img>")
      .addClass("location-img")
      .attr("src", location.picture_url)
      .attr("alt", "Location Image");
    const $locationName = $("<p>")
      .addClass("location-name")
      .text(location.name);

    $locationHeader.append($locationImage, $locationName);
    $location.append($locationHeader);

    const $locationBody = $("<div>").addClass("location-body");
    const $locationAddress = $("<div>").addClass("location-address");
    const $locationRoad = $("<p>").text(location.road);
    const $locationCity = $("<p>").text(location.city);

    $locationAddress.append($locationRoad, $locationCity);
    $locationBody.append($locationAddress);
    $location.append($locationBody);

    const $locationFooter = $("<div>").addClass("location-footer");
    // Add footer content here

    $location.append($locationFooter);
    $location.on("click", () => {
      getMenu(location.id);
      $restaurantsContainer.hide();
      $(".menu-container").toggle();
    });

    $restaurantsContainer.append($location);
  }
};
