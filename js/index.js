var buttons = document.querySelectorAll(".btn");
var screen = document.querySelectorAll(".city");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.forEach((city) => city.classList.add("d-none"));

    const $getId = btn.getAttribute("data-content");
    if ($getId === "delete") {
      return;
    }

    const $selectCity = document.getElementById($getId);

    if ($selectCity) {
      $selectCity.classList.remove("d-none");
    }
  });
});
