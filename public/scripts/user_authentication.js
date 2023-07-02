/* eslint-disable no-undef */

//////////////////////

const authenticateUser = $("#login-form").submit(function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the user login credentials
  const email = $("#email").val();
  const password = $("#password").val();

  // Call the function to check credentials with the database
  getUserCredentials(email, password);
});



const getUserCredentials = (email, password) => {
  $.post("/api/login", { email, password })
    .done(function (response) {
      // Handle the successful response
      console.log(response);
    })
    .fail(function (xhr, status, error) {
      // Handle the failed response
      console.log(error);
    });
};
//   $userAuthenticationContainer.html(`
//   <section class = 'login-form'>
//   <h1>Login</h1>
//   <form action="/Login" method="POST">
//     <div>
//       <label for="email">Email</label>
//       <input type="text" id="email" name="email" placeholder="email" required>
//     </div>
//       <label for="password">Password</label>
//       <input type="password" id="password" name="password" placeholder="password" required>
//     </div>
//     <div>
//       <input type="submit" value="Login">
//     </div>
//   </form>
//   </section>`);
// };

//   const $loginForm = `
// <section class = 'login-form'>
// <h1>Login</h1>
// <form action="/Login" method="POST">
//   <div>
//     <label for="email">Email</label>
//     <input type="text" id="email" name="email" placeholder="email" required>
//   </div>
//     <label for="password">Password</label>
//     <input type="password" id="password" name="password" placeholder="password" required>
//   </div>
//   <div>
//     <input type="submit" value="Login">
//   </div>
// </form>
// </section>`;