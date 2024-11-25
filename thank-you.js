const selectedRating = document.getElementById("selected_rating");

const user_rating = window.localStorage.getItem("user-rating");

selectedRating.innerText = user_rating;
