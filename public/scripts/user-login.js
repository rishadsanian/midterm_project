
// const asyncSubmit = function() {
//   $(".form-new").on("submit", function(event) {
//     event.preventDefault();

//     //Error handling -->error-handle.js
//     if (handleErrors()) return handleErrors();

//     //Posting new tweet
//     const text = $(this).serialize();
//     $.ajax({
//       type: "POST",
//       url: "/tweets",
//       data: text,

//       success: function() {
//         //reload tweets list - clear and load
//         $("article.tweets ").remove();
//         loadTweets();

//         //clear textarea and reset counter
//         $("#tweet-text").val("").trigger("input");

//         //clear any error messages
//         $(".error").remove();
//       },
//       //handle post fail errors
//       error: function(xhr, status, error) {
//         console.log("Request failed!");
//         console.log(xhr.responseText);
//       },
//     });
//   });
// };

// const $login

// <main style="margin: 1em">
// <h3 style="font-weight: 600; margin-bottom: 0">Login</h3>
// <br />

// <form action="/login" method="POST">
//   <div class="form-group mb-2">
//     <label for="email" style="font-weight: 500">Email Address</label>
//     <input
//       class="form-control"
//       id="email"
//       type="email"
//       name="email"
//       placeholder="Enter email"
//       style="width: 300px; margin-bottom: 1em"
//     />

//     <label for="password" style="font-weight: 500">Password</label>
//     <input
//       class="form-control"
//       id="password"
//       type="password"
//       name="password"
//       placeholder="Password"
//       style="width: 300px; margin-bottom: 1em"
//     />
//   </div>
//   <div class="form-group">
//     <button type="submit" class="btn btn-primary" style="width: 5em">
//       Login
//     </button>
//   </div>
// </form>
// </main>