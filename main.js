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

  var y = document.getElementById("infoScreen")
  y.classList.add("revealed");
  y.classList.remove("hidden");
}

//state and status *** status of 200 means it was successful 503 means internal service error 404 means not found.

//http verbs specify what kind of request you're making (get post patch and delete are main verbs.)

//get - get something from bulletin board. post - put stuff onto a bulletin board. patch - update info. delete - delete it.

//

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").inneratkML = myObj.name;
document.getElementById("pokeImage").src = myObj.sprites.front_default;
document.getElementById("pokeNumber").inneratkML = "Num " + myObj.id;
document.getElementById("pokeName").inneratkML = myObj.name;
document.getElementById("pokeType").inneratkML = myObj.types[0].type.name;
document.getElementById("atk").inneratkML = myObj.stats[4].stat.base_stat;
document.getElementById("def").inneratkML = myObj.stats[3].stat.base_stat;
  document.getElementById("abilityBox").inneratkML = "HP is: " + myObj.stats[5].stat.base + " " + myObj.abilities[0].ability.name + " " + myObj.abilities[1].ability.name;
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt", true);
  xhttp.send();
}
