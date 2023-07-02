/* eslint-disable no-undef */

//////////////////////

const renderUserAuthentication = () => {
  const $userAuthenticationContainer = $(".user-authentication");

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

  const getUserCredentials = (email, password) => {
    $.get("/api/login", function (data) {
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

  $userAuthenticationContainer.html(`
  <section class = 'login-form'>
  <h1>Login</h1>
  <form action="/Login" method="POST">
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="email" required>
    </div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="password" required>
    </div>
    <div>
      <input type="submit" value="Login">
    </div>
  </form>
  </section>`);
};
