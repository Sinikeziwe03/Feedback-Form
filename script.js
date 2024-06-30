let stars = document.querySelectorAll(".star i");

stars.forEach((star, index1) => {

star.addEventListener("click", () => {

stars.forEach((star, index2)=>{

  index1 >= index2
    ? star.classList.add("active")
    : star.classList.remove("active");
});
});
});

function submitNow(event) {
  event.preventDefault
  alert("Thank you for submitting your rating😊");
}
let submitNowButton = document.querySelector("button");
submitNowButton.addEventListener("click", submitNow);

