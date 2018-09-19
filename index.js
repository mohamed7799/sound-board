"use strict";
let cells = Array.from(document.getElementsByClassName("key"));

let chars = cells.map(el => {
  return el.innerHTML;
});

console.log(chars);

window.addEventListener("keydown", function(event) {
  chars.forEach(char => {
    if (char.charCodeAt(0) === event.which) {
      let target = document.querySelector(`#${char}`);
      let sound = target.querySelector("audio");
      sound.play();
      target.classList.add("soundBoard__cell--hold");
    }
  });
});

window.addEventListener("keyup", function(event) {
  chars.forEach(char => {
    if (char.charCodeAt(0) === event.which) {
      let target = document.querySelector(`#${char}`);
      let sound = target.querySelector("audio");
      sound.pause();
      sound.currentTime = 0;
      target.classList.remove("soundBoard__cell--hold");
    }
  });
});
