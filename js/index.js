let navbar = document.querySelector("#navbar");
let ham = document.querySelector(".ham");
let SubmitBtn = document.querySelector(".btn-submit");

ham.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

// SubmitBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
// })