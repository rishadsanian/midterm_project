// /* eslint-disable no-undef */


// const showHero = (user) => {
//   const $section = $("<section>").addClass("hero");
//   const $div = $("<div>").addClass("hero-content");

//   if (user) {
//     const $h1 = $("<h1>").text(`Hello ${user}`);
//     const $p = $("<p>").text("Hungry?");
//     const $a = $("<a>")
//       .addClass("scroll-to-main")
//       .attr("href", "#main")
//       .text("Find Food");

//     // Smooth scroll functionality
//     $a.on("click", function (event) {
//       event.preventDefault();
//       $("html, body").animate(
//         {
//           scrollTop: $("#main").offset().top,
//         },
//         800
//       );
//     });

//     $div.append($h1, $p, $a); // Append elements to the $div
//   }

//   if (!user) {
//     const $h1 = $("<h1>").text("Welcome to FeedHungry");
//     const $p = $("<p>").text(
//       "Order online, pick up, and satisfy your cravings effortlessly."
//     );
//     const $a = $("<a>")
//       .addClass("btn open-login")
//       .attr("href", "/login")
//       .text("Get Started");

//     $div.append($h1, $p, $a); // Append elements to the $div
//   }

//   $section.append($div);
//   $section.append($("<span>").addClass("hero-span"));

//   // Append the constructed section to the body or any other container
//   $("body").append($section);
// };
