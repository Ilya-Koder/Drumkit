// ein knapp for kvar trommelyd
//kunne trykke på knappen for å lage lyden
//kvar knapp skal ha dedikert keybaord shortcut

const container = document.querySelector("#container");
const drumMap = {
  kick: "q",
  snare: "w",
  hihat: "e",
  openhat: "r",
  ride: "a",
  tom: "s",
  tink: "d",
  clap: "f",
  deep: "z",
  short: "x",
  tribal: "c",
  bass: "v",
};
//loop over the keys in the drummap object
//using the "for in" loop
for (let key in drumMap) {
  //making drum button and set it to flex/column
  const drum = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(4, 1fr)";
  container.style.gridGap = "1rem";
  container.style.padding = "1rem";

  //Make drum button
  const button = document.createElement("button");
  button.style.height = "100px";
  button.style.width = "100px";
  button.style.backgroundColor = "#59C3C3";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  //drum names
  const drumTxt = document.createElement("p");
  drumTxt.textContent = `${key[0].toUpperCase()}${key.slice(1)}`;

  //Display keyboard shortcut
  const shortcut = document.createElement("kbd");
  shortcut.textContent = drumMap[key]; //-> drumMap.kick
  shortcut.style.fontSize = "2rem";

  //makes it so the text is inside the button
  button.append(drumTxt, shortcut);
  //eventlistener for clicks
  button.addEventListener("click", () => {
    // Play the drum sound
    new Audio(`./sounds/${key}.wav`).play();
    //onclick highlights keys
    button.style.backgroundColor = "#CAD2C5";

    // Reset background color after 500 ms
    setTimeout(() => {
      button.style.backgroundColor = "#59C3C3";
    }, 500);
  });

  // Append button to the drum container
  drum.append(button);

  // Append the drum container to the main container
  container.append(drum);
}

// Listener for keyboard input
window.addEventListener("keydown", (event) => {
  for (let key in drumMap) {
    if (event.key === drumMap[key]) {
      // Play the drum sound
      new Audio(`./sounds/${key}.wav`).play();

      // Find the corresponding button and highlight it
      const buttons = container.querySelectorAll("button");
      buttons.forEach((button) => {
        const shortcut = button.querySelector("kbd");
        if (shortcut.textContent === drumMap[key]) {
          button.style.backgroundColor = "#CAD2C5";

          // Reset background color after 500 ms
          setTimeout(() => {
            button.style.backgroundColor = "#59C3C3";
          }, 500);
        }
      });
      break;
    }
  }
});
