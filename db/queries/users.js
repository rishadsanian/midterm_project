const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

// ---------------------------------------------------//

//implement this

const findUserByEmail = (email, callback) => {}; // if found return  true else false

// userExists will return true or false depending on if their email exists in db


//setCookies if valid user is logged in then set cookies of userId, and userType, and logged in status

//post to be used in register route
const addUser = (newUser) => {
  //destructure keys and values into arrays
  const columns = Object.keys(newUser);
  const values = Object.values(newUser);
  const placeholders = [];

  //placeholders for parameterized queries
  for (let i = 0; i < values.length; i++) {
    placeholders.push(`$${i + 1}`);
  }

  //queryString
  const qs = `
    INSERT INTO users (${columns.join(", ")})
    VALUES (${placeholders.join(", ")})
    RETURNING *;
  `;

  return db
    .query(qs, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// ---------------------------------------------------//

module.exports = { getUsers };
