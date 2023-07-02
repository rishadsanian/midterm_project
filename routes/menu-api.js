const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  //should be '/:id'
  // convert this to function
  const query = `SELECT * FROM menu_items WHERE restaurant_id = 1;`;
  console.log(query);
  db.query(query)


    .then(data => {
      const menu = data.rows;
      console.log(menu);
      res.json({ menu });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
