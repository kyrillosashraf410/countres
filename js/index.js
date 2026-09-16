var buttons = document.querySelectorAll(".btn");
var screen = document.querySelector(".screen");
// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.innerHTML == "Egypt") {
//       screen.children[0].src = "Egyptpng.png";
//     } else if (btn.innerHTML == "palstan") {
//       screen.children[0].src = "palasten.png";
//     } else if (btn.innerHTML == "moroco") {
//       screen.children[0].src = "moroco.png";
//     } else if (btn.innerHTML == "DeleteCountry") {
//       screen.children[0].src = "";
//     }
//   });
// });

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    var $masar = btn.getAttribute("data-img");
    screen.children[0].src = $masar;
  });
});
