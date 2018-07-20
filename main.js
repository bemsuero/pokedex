console.log("Everything is in control")
pokemonPage = {
  pokedex: "images/" + "pokedex.png",
  startScreen: "images/" + "startScreenUpdate.png",
  pressStart: "images/" + "pressStart.png",
  pokemonHeading: "Pokemon Version 1.5"
}

var a = document.getElementById("pokedex");
a.src = pokemonPage.pokedex;

var b = document.getElementById("startScreen");
b.src = pokemonPage.startScreen;

var c = document.getElementById("heading");
c.innerHTML = pokemonPage.pokemonHeading;

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
  x.classList.remove("revealed");
  var c = document.getElementById("heading");
  c.classList.add("hidden");
  c.classList.remove("revealed");
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
var trainerName = prompt("What's your name, Trainer?");
var addName = document.getElementById("trainerName");
addName.innerHTML = trainerName;
// loopThrough();
}
var color = document.getElementById('pokeType')

function typeChange() {
  if (color.innerHTML == "water") {
    color.classList.remove("default");
    color.classList.remove("rock")
    color.classList.remove("grass")
    color.classList.remove("fire")
    color.classList.add("water");
  }
   if (color.innerHTML == "fire") {
     color.classList.remove("default");
     color.classList.remove("rock")
     color.classList.remove("water")
    color.classList.remove("grass")
    color.classList.add("fire");
  }
   if (color.innerHTML == "grass") {
    color.classList.remove("default");
    color.classList.remove("rock")
    color.classList.remove("water")
    color.classList.remove("fire")
    color.classList.add("grass");
  }
   if (color.innerHTML == "rock") {
     color.classList.remove("default");
     color.classList.remove("grass")
     color.classList.remove("water")
    color.classList.remove("fire")
    color.classList.add("rock");
  }
}

//state and status *** status of 200 means it was successful 503 means internal service error 404 means not found.

//http verbs specify what kind of request you're making (get post patch and delete are main verbs.)

//get - get something from bulletin board. post - put stuff onto a bulletin board. patch - update info. delete - delete it.

// Pokemon = {}; //probably if i'm doing classes
// pokemonGet = [];
// totalPokemon = 0;
//
// function createPokemon(pokeName) {
//     pokemon = {
//       pokeName: pokeName
//     }
//     totalPokemon++;
//     pokemonGet.push(pokemon);
//
//     alert("You have " + totalPokemon + " pokemon")
//     }
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
// you can call it by just x.


///////////////////

// function getPokemon() {
//   var pokemon = {
//       pokeName: myObj.name,
//       pokeImage: myObj.sprites.front_default,
//       pokeNumber: "Num " + myObj.id,
//       pokeType: myObj.types[0].type.name,
//       atk: myObj.stats[4].base_stat,
//       def: myObj.stats[3].base_stat,
//       hp: myObj.stats[5].base_stat
// }
//     totalPokemon++;
//     pokemonGet.push(pokemon);
//
//     alert("You have " + totalPokemon + " pokemon")
//     }
//
// var owner = {
//     name: "Trainer",
//     ownedPokemon: pokemonGet,
//     // roster
//     function() {
//       // return this.pokemon;
//       console.log(pokemon[0]);
//       console.log(pokemon[1]);
//       console.log(pokemon[2]);
//
//     }
// }
////////////////////////////////////
pokemon = {};
pokemonGet = [];
totalPokemon = 0;

owner = {
    name: trainerName,
    ownedPokemon: pokemonGet,
    function() {
      var nope = 0;
      for (nope = 0; nope < pokemonGet.length; nope++)
      alert(JSON.stringify(pokemonGet[nope]));
    }
}




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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat


        }
        shake = document.getElementById("pokeImage");
        shake.classList.remove("infinite");
        typeChange();
            }
      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt", true);
      xhttp.send();
  }
// https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt
// https://pokeapi.co/api/v2/pokemon/7/

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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat
        }
        typeChange();
            }

      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/psyduck.txt", true);
      xhttp.send();
    }
// https://raw.githubusercontent.com/bemsuero/pokerepo/master/psyduck.txt
// https://pokeapi.co/api/v2/pokemon/54/

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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat
        }
        typeChange();
            }

      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/growlithe.txt", true);
      xhttp.send();
    }

    // https://raw.githubusercontent.com/bemsuero/pokerepo/master/growlithe.txt
    // https://pokeapi.co/api/v2/pokemon/58/


    function rapidash() {
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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat,
              // moves: myObj.
        }
        typeChange();
            }
      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/rapidash.txt", true);
      xhttp.send();
    }
  // https://raw.githubusercontent.com/bemsuero/pokerepo/master/rapidash.txt
  // https://pokeapi.co/api/v2/pokemon/78/

    function tangela() {
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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat
        }
        typeChange();
            }
      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/tangela.txt", true);
      xhttp.send();
    }
    // https://raw.githubusercontent.com/bemsuero/pokerepo/master/tangela.txt
    // https://pokeapi.co/api/v2/pokemon/114/

    function regirock() {
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
          document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
           pokemon = {
              pokeName: myObj.name,
              pokeImage: myObj.sprites.front_default,
              pokeNumber: "Num " + myObj.id,
              pokeType: myObj.types[0].type.name,
              atk: myObj.stats[4].base_stat,
              def: myObj.stats[3].base_stat,
              hp: myObj.stats[5].base_stat
        }
        typeChange();
            }
      };
      xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/regirock.txt", true);
      xhttp.send();
    }
    // https://raw.githubusercontent.com/bemsuero/pokerepo/master/regirock.txt
    // https://pokeapi.co/api/v2/pokemon/377/

    function adopt() {
      totalPokemon++;
      pokemonGet.push(pokemon);
        alert("You have " + totalPokemon + " pokemon")
        check();
}

// function loopThrough() {
//   var createPokemonSelectBox = document.createElement("P");
// num = 0;
// for (num = 0; num <= 807; num++)
// var populateBox = document.createTextNode();
// var space1 = document.createTextNode(" ");
// createPokemonSelectBox.appendChild(populateBox);
//
// document.getElementById("pokemonSelectBox").appendChild("populateBox");
// document.getElementById("pokemonSelectBox").appendChild("space1");
// }

// "https://pokeapi.co/api/v2/pokemon/" + [num]

function check() {
  var createList = document.createElement("P");
  i = 0;
  for (i = 0; i < pokemonGet.length; i++)
  var makePokemon = document.createTextNode(pokemonGet[i].pokeName);
  var space = document.createTextNode(" ");
  createList.appendChild(makePokemon);

  document.getElementById("pokeList").appendChild(makePokemon);
    document.getElementById("pokeList").appendChild(space);
}
