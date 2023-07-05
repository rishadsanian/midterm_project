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
    .fail(function (xhr, status, error) {
      // Handle the failed response
      console.log(error);
    });
};

const showLoginFormModal = () => {
  const $loginModal = $("<div>").addClass("login-modal");

  // Create the modal content
  const $loginForm = $("<section>").addClass("login-form");
  const $heading = $("<h1>").text();
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
  const $submitDiv = $("<div>");
  const $submitButton = $("<input>").attr({
    type: "submit",
    value: "Login",
  });

  $emailDiv.append($emailLabel, $emailInput);
  $passwordDiv.append($passwordLabel, $passwordInput);
  $submitDiv.append($submitButton);
  $form.append($emailDiv, $passwordDiv, $submitDiv);
  $loginForm.append($closeButton, $form);

  // Append the modal content to the modal container
  $loginModal.append($loginForm);

  // Append the modal container to the body
  $(".not-logged-in").append($loginModal);

  // Open the modal
  $(".open-login").click(function (event) {
    event.preventDefault();
    $(".login-modal").toggle();
    $(".hero-content").toggle();
  });
  //Close the modal
  $closeButton.on("click", function () {
    $loginModal.toggle();
    $(".hero-content").toggle();
  });
};
