console.log("Everything is in control")
window.onload
pokemonPage = {
  pokedex: "images/" + "pokedex.png",
  startScreen: "images/" + "startScreenUpdate.png",
  pressStart: "images/" + "pressStart.png"
}

var a = document.getElementById("pokedex");
a.src = pokemonPage.pokedex;

var b = document.getElementById("startScreen");
b.src = pokemonPage.startScreen;

var startFlash = document.getElementById("pressStart");
startFlash.src = pokemonPage.pressStart;



// function flash() {
//   window.setInterval(flash, 1000);
//   var startFlash = document.getElementById("pressStart");
//   startFlash.src = pokemonPage.pressStart;
//   if (startFlash.classList = "extraRevealed") {
//     startFlash.classList.add("extraHidden");
//     startFlash.classList.remove("extraRevealed")
//   } else {
//     startFlash.classList.add("extraRevealed")
//     startFlash.classList.remove("extraHidden");
//   } LOLOLOLOLOLLOLLOLOLOLOLOLOLOLOLOLOLOL
// }

function start() {
  var x = document.getElementById("startScreen");
  x.classList.add("hidden");
  x.classList.remove("revealed")
  var z = document.getElementById("pressStart");
  z.classList.add("hidden");
  z.classList.remove("revealed");
  z.classList.remove("animated");
  z.classList.remove("infinite");
  z.classList.remove("flash");

  var y = document.getElementById("pokedex")
  y.classList.add("revealed");
  y.classList.remove("hidden");
}
