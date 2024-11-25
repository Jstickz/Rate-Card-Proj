const rating = document.querySelectorAll(".rating");
const submit = document.getElementById("submit");

let userRating;

rating.forEach((button) => [
  button.addEventListener("click", (e) => {
    rating.forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
    userRating = e.target.value;
  }),
]);

submit.addEventListener("click", () => {
  if (!userRating) {
    alert("You need to select a rating");
  } else {
    window.location.href = "./thank-you.html";

    window.localStorage.setItem("user-rating", userRating);
  }
});
