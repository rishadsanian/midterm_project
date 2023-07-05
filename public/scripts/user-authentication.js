/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
    .then(getUserSessionData) //(getUserSessionData())
    .fail(function (xhr, status, error) {
      // Handle the failed response
      console.log(error);
    });
};
const showLoginForm = () => {
  const $userAuthentication = $("#user-authentication");

  // Create the login form
  const $loginForm = $("<section>").addClass("login-form");
  const $closeButton = $("<button>").addClass("close-button").text("x");
  const $form = $("<form>").attr({
    action: "/login",
    method: "POST",
  });
  const $emailDiv = $("<div>").addClass("form-row");
  const $emailLabel = $("<label>").attr("for", "email").text("Email");
  const $emailInput = $("<input>").attr({
    type: "text",
    id: "email",
    name: "email",
    placeholder: "email",
    required: true,
  });
  const $passwordDiv = $("<div>").addClass("form-row");
  const $passwordLabel = $("<label>").attr("for", "password").text("Password");
  const $passwordInput = $("<input>").attr({
    type: "password",
    id: "password",
    name: "password",
    placeholder: "password",
    required: true,
  });
  const $submitButton = $("<input>").attr({
    type: "submit",
    value: "Login",
  });

  $emailDiv.append($emailLabel, $emailInput);
  $passwordDiv.append($passwordLabel, $passwordInput);
  $form.append($emailDiv, $passwordDiv, $submitButton);
  $loginForm.append($closeButton, $form);

  // Append the login form to the user authentication section
  $userAuthentication.append($loginForm);

  // Append the user authentication section to the main section
  $("#user-authentication").append($userAuthentication);

  // Show the login form
  $(".open-login").click(function (event) {
    event.preventDefault();
    $userAuthentication.show();
  });

  // Close the login form
  $closeButton.on("click", function () {
    $userAuthentication.hide();
  });
};
