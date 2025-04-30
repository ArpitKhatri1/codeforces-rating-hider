window.addEventListener("load", () => {
  console.log("Loaded Extension");
  const elements = document.getElementsByClassName("ProblemRating");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
});
