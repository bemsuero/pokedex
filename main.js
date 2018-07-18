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

// pokemon = [];
// totalPokemon = 0;
//
//   }
//   createPokemon() {
//     var pokemon = {
//       class Pokemon {
//         constructor() {
//           this.pokeName = name;
//           this.pokeImage = image;
//           this.pokeNumber = number;
//           this.pokeType = type;
//           this.atk = atk;
//           this.def = def;
//           this.hp = hp;
//     }
//     totalPokemon++;
//     pokemon.push(pokemon);
//   }
// }
//     owner = {
//       name: "Trainer";
//       ownedPokemon: pokemon,
//       roster function() {
//         // return this.pokemon;
//         console.log(users[0]);
//         console.log(users[1]);
//         console.log(users[2]);
//
//       }
//     }
//
//     var x = owner.roster();
    //you can call it by just x.

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
  // var w = document.getElementById("firstScreen");
  // w.classList.add("hidden");
  // w.classList.remove("revealed")

  var y = document.getElementById("infoScreen")
  y.classList.add("revealed");
  y.classList.remove("hidden");
}

//state and status *** status of 200 means it was successful 503 means internal service error 404 means not found.

//http verbs specify what kind of request you're making (get post patch and delete are main verbs.)

//get - get something from bulletin board. post - put stuff onto a bulletin board. patch - update info. delete - delete it.

//

function squirtle() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").innerHTML = myObj.name;
document.getElementById("pokeImage").src = myObj.sprites.front_default;
document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
  document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat +  ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt", true);
  xhttp.send();
}

function psyduck() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").innerHTML = myObj.name;
document.getElementById("pokeImage").src = myObj.sprites.front_default;
document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
  document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat +  ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/psyduck.txt", true);
  xhttp.send();
}

function growlithe() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").innerHTML = myObj.name;
document.getElementById("pokeImage").src = myObj.sprites.front_default;
document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
  document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat +  ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/growlithe.txt", true);
  xhttp.send();
}
