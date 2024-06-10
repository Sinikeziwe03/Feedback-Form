document.addEventListener("DOMContentLoaded",function(){
let stars= document.querySelectorAll(".rating span i");
let output= document.getElementById("output");
 
let rating= 0;

function updatingRating(index){
  rating= index;
  output.innerHTML= `Rating is: ${rating}/5`;

 stars.forEach((star, i) => {
   if (i < index) {
     star.classList.remove("far"); // Remove empty star class
     star.classList.add("fas"); // Add filled star class
   } else {
     star.classList.remove("fas"); // Remove filled star class
     star.classList.add("far"); // Add empty star class
   }
 });
}

stars.forEach((star, index) => {
  star.addEventListener("click",() => {
    updateRating(index + 1);
    });
});
});

document.querySelector(".button").addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  if (name && email && rating) {
    alert(
      `Thank you for your feedback!\nName: ${name}\nEmail: ${email}\nRating: ${rating}\nMessage: ${message}`
    );
    
  } else {
    alert("Please fill in all required fields and provide a rating.");
  }
});
