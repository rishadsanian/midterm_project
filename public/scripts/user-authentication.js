/* eslint-disable no-undef */

// const  fetchUserInfo= ()=> {
//   const templateVars = <%= JSON.stringify(templateVars) %>;
//   let currentUser = templateVars;
//   console.log(currentUser);
//   // Perform any further operations with the currentUser object
// }

//////////////////////

const authenticateUser = () =>
  $("#login-form").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the user login credentials
    const email = $("#email").val();
    const password = $("#password").val();

    // Call the function to check credentials with the database
    getUserCredentials(email, password);
  });

const getUserCredentials = (email, password) => {
  $.post("/login", { email, password })
    .done(function (response) {
      // Handle the successful response
      currentUser = response;
      // console.log(currentUser);
    })
    .fail(function (xhr, status, error) {
      // Handle the failed response
      console.log(error);
    });
};
