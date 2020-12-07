const list = document.querySelector(".question");
const answer = document.querySelector(".answer");
list.addEventListener("click", () => {
  answer.classList.toggle('active');
});

