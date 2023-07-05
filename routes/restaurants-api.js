const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


//GET menu by restaurant id

router.get('/', (req, res) => {
 
  const query = 'SELECT * FROM restaurants LIMIT 10;';
  
  db.query(query)
    .then(data => {
      const restaurants = data.rows;
      // console.log(restaurants);
      res.json({ restaurants });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
