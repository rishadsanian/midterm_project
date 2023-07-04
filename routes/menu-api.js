const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


//GET menu by restaurant id

router.get('/:id', (req, res) => {
  const restaurantId = req.params.id;
  const query = 'SELECT * FROM menu_items WHERE restaurant_id = $1;';
  
  db.query(query, [restaurantId])
    .then(data => {
      const menu = data.rows;
      console.log(menu);
      res.json({ menu });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
