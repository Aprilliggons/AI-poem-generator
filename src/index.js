function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem will go here Perioddddd!!💙",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
