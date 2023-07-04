//mount all customer functions here
// const {renderMenu} = require('./customer-menu');

// renderMenu();

const getRestaurants = ()) => {
  $.get("/api/menu", function (data) {
    const menu = data.menu;
    console.log(menu);

    for (const item of menu) {
      console.log(item.category_id);
    }

    renderMenu(menu, categories);
  }).fail(function (xhr, status, error) {
    // redirect to /error -> error.ejs
    console.log(error);
  });
};
