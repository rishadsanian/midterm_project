//mount all customer functions here
// const {renderMenu} = require('./customer-menu');

// renderMenu();

const getRestaurants = () => {
  $.get("/api/restaurants", function (data) {
    const restaurants = data.restaurants;
    console.log(restaurants);

    for (const location of restaurants) {
      console.log(location.restaurant_id);
    }

    renderRestaurants(menu, categories);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });
};
