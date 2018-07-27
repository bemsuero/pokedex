console.log("Everything is in control")
// responsiveVoice.speak("hello world");
pokemonPage = {
  pokedex: "images/" + "pokedexBlank.png",
  startScreen: "images/" + "startScreenUpdate.png",
  pressStart: "images/" + "pressStart.png",
  pokemonHeading: "Pokemon Version 2.5",
  atkDefBox: "images/" + "atkDefBox.png",
  descriptionBox: "images/" + "descriptionBox.png",
  menuIcon: "images/" + "menuIcon.png",
  numberNameBar: "images/" + "numberNameBar.png",
  pokemonIcon: "images/" + "pokemonIcon.png",
  pokeTypeBoxes: "images/" + "pokeTypeBoxes.png",
  selectBoxImage: "images/" + "selectBoxImage.png"
}

var pokedexImage = document.getElementById("pokedex");
pokedexImage.src = pokemonPage.pokedex;

var atkDefBox = document.getElementById("atkDefBox");
atkDefBox.src = pokemonPage.atkDefBox;

var descriptionBox = document.getElementById("descriptionBox");
descriptionBox.src = pokemonPage.descriptionBox;

var menuIcon = document.getElementById("nav");
menuIcon.src = pokemonPage.menuIcon;

var numberNameBar = document.getElementById("numberNameBar");
numberNameBar.src = pokemonPage.numberNameBar;

var pokemonIcon = document.getElementById("nav2");
pokemonIcon.src = pokemonPage.pokemonIcon;

var pokeTypeBoxes = document.getElementById("pokeTypeBox");
pokeTypeBoxes.src = pokemonPage.pokeTypeBoxes;

var selectBoxImage = document.getElementById("pokemonSelectBoxImage");
selectBoxImage.src = pokemonPage.selectBoxImage;

var startScreenImage = document.getElementById("startScreen");
startScreenImage.src = pokemonPage.startScreen;

var startHeading = document.getElementById("heading");
startHeading.innerHTML = pokemonPage.pokemonHeading;

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
  addName.innerHTML = trainerName.charAt(0).toUpperCase() + trainerName.slice(1);
  if (addName.innerHTML == "Dave") {
    responsiveVoice.speak("I'm sorry, I can't do that" + addName.innerHTML);
  }
  else {
  responsiveVoice.speak("Welcome" + addName.innerHTML);
}
}
// loopThrough();
function openBall() {
shake = document.getElementById("pokeImage");
shake.classList.remove("infinite");
}
var color = document.getElementById("pokeType");
var color2 = document.getElementById("pokeType2")

//// lmao this function is FUCKING FOREVER but I don't know the short way to do it.
function removeClasses() {
  // var x = color.classList.remove;
color.className = "";
}

function removeClasses2() {
color.className = "";
}

function typeChange() {
  // var plus = color.classList.add;
  if (color.innerHTML == "water") {
    removeClasses();
    color.classList.add("water");
  }
   if (color.innerHTML == "fire") {
     removeClasses();
    color.classList.add("fire");
  }
   if (color.innerHTML == "grass") {
    removeClasses();
    color.classList.add("grass");
  }
   if (color.innerHTML == "rock") {
    removeClasses();
    color.classList.add("rock");
  }
  if (color.innerHTML == "normal") {
    removeClasses();
    color.classList.add("normal");
  }
   if (color.innerHTML == "fighting") {
     removeClasses();
    color.classList.add("fighting");
  }
   if (color.innerHTML == "flying") {
    removeClasses();
    color.classList.add("flying");
  }
   if (color.innerHTML == "poison") {
    removeClasses();
    color.classList.add("poison");
  }
  if (color.innerHTML == "electric") {
    removeClasses();
    color.classList.add("electric");
  }
   if (color.innerHTML == "ground") {
     removeClasses();
    color.classList.add("ground");
  }
   if (color.innerHTML == "psychic") {
    removeClasses();
    color.classList.add("psychic");
  }
   if (color.innerHTML == "ice") {
    removeClasses();
    color.classList.add("ice");
  }
  if (color.innerHTML == "bug") {
    removeClasses();
    color.classList.add("bug");
  }
   if (color.innerHTML == "dragon") {
     removeClasses();
    color.classList.add("dragon");
  }
   if (color.innerHTML == "ghost") {
    removeClasses();
    color.classList.add("ghost");
  }
   if (color.innerHTML == "dark") {
    removeClasses();
    color.classList.add("dark");
  }
  if (color.innerHTML == "steel") {
   removeClasses();
   color.classList.add("steel");
 }
  if (color.innerHTML == "fairy") {
   removeClasses();
   color.classList.add("fairy");
 }
}

function typeChange2() {
if (color2.innerHTML == "water") {
  removeClasses2();
  color2.classList.add("water");
}
 if (color2.innerHTML == "fire") {
   removeClasses2();
  color2.classList.add("fire");
}
 if (color2.innerHTML == "grass") {
  removeClasses2();
  color2.classList.add("grass");
}
 if (color2.innerHTML == "rock") {
  removeClasses2();
  color2.classList.add("rock");
}
if (color2.innerHTML == "normal") {
  removeClasses2();
  color2.classList.add("normal");
}
 if (color2.innerHTML == "fighting") {
   removeClasses2();
  color2.classList.add("fighting");
}
 if (color2.innerHTML == "flying") {
  removeClasses2();
  color2.classList.add("flying");
}
 if (color2.innerHTML == "poison") {
  removeClasses2();
  color2.classList.add("poison");
}
if (color2.innerHTML == "electric") {
  removeClasses2();
  color2.classList.add("electric");
}
 if (color2.innerHTML == "ground") {
   removeClasses2();
  color2.classList.add("ground");
}
 if (color2.innerHTML == "psychic") {
  removeClasses2();
  color2.classList.add("psychic");
}
 if (color2.innerHTML == "ice") {
  removeClasses2();
  color2.classList.add("ice");
}
if (color2.innerHTML == "bug") {
  removeClasses2();
  color2.classList.add("bug");
}
 if (color2.innerHTML == "dragon") {
   removeClasses2();
  color2.classList.add("dragon");
}
 if (color2.innerHTML == "ghost") {
  removeClasses2();
  color2.classList.add("ghost");
}
 if (color2.innerHTML == "dark") {
  removeClasses2();
  color2.classList.add("dark");
}
if (color2.innerHTML == "steel") {
 removeClasses2();
 color2.classList.add("steel");
}
if (color2.innerHTML == "fairy") {
 removeClasses2();
 color2.classList.add("fairy");
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
pokemonGet = [];
totalPokemon = 0;

owner = {
    name: trainerName,
    ownedPokemon: pokemonGet,
    function() {
      var arrayContents = 0;
      for (arrayContents = 0; arrayContents < pokemonGet.length; arrayContents++)
      alert(JSON.stringify(pokemonGet[arrayContents]));
    }
}

function findPokemon() {
var answer = prompt("What pokemon would you like to find? (You can enter name or number.)");
if (answer == 1) {
  let answer = "bulbasaur";
  loadPokemon(answer);
}
if (answer == 802) {
  let answer = "marshadow";
  loadPokemon(answer);
}
 if (answer > 803) {
   alert("That number is too high!")
 } else {
var realAnswer = answer.toLowerCase();
loadPokemon(realAnswer);
}
}

function retPokemon () {
pokemon = {
  pokeName: myObj.name,
  pokeImage: myObj.sprites.front_default,
  pokeNumber: "Num " + myObj.id,
  pokeType: myObj.types[0].type.name,
  atk: myObj.stats[4].base_stat,
  def: myObj.stats[3].base_stat,
  hp: myObj.stats[5].base_stat
}

}
function retPokemon2 () {
pokemon = {
  pokeName: myObj.name,
  pokeImage: myObj.sprites.front_default,
  pokeNumber: "Num " + myObj.id,
  pokeType: myObj.types[0].type.name,
  pokeType2: myObj.types[1].type.name,
  atk: myObj.stats[4].base_stat,
  def: myObj.stats[3].base_stat,
  hp: myObj.stats[5].base_stat

}

}

squirtle = "7";
psyduck = "54";
growlithe = "58";
rapidash = "78";
tangela = "114";
regirock = "377";


function loadPokemon(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").innerHTML = myObj.name;
      document.getElementById("pokeImage").src = myObj.sprites.front_default;
      document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
      document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
      // document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
      document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
      document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
      document.getElementById("abilityBox").innerHTML = "This pokemon's HP is " + myObj.stats[5].base_stat + " and it's abilitiy is " + myObj.abilities[0].ability.name + ". ";
      // + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";

if (myObj.types[0].slot == 2) {
document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
responsiveVoice.cancel();
  retPokemon2();
      typeChange2();
      responsiveVoice.speak(myObj.name);
      responsiveVoice.speak(myObj.types[0].type.name + "type");
      responsiveVoice.speak("Also" + myObj.types[1].type.name + "type.");
        responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
}
  else {
    document.getElementById("pokeType2").innerHTML = "Pokemon Type";
    responsiveVoice.cancel();
    retPokemon();
        typeChange();
        removeClasses2();
        responsiveVoice.speak(myObj.name);
        pokeType: responsiveVoice.speak(myObj.types[0].type.name + "type");
          responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
  }
    // retPokemon();
    typeChange();
    openBall();
    addPokemonToList();
    document.getElementById("moveList").innerHTML = " ";
        }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
  xhttp.send();
}


document.getElementById("pokeImage").addEventListener("click", displayStats);
// document.getElementById("pokeImage").addEventListener("click", randomPokemon);

function displayStats() {
randomPokemon();
document.getElementById("moveList").innerHTML = "'My Moves are': " + myObj.moves[0].move.name + ", " +  myObj.moves[1].move.name + ", " + myObj.moves[2].move.name + ", and " + myObj.moves[3].move.name + ". " + "'" + myObj.name.charAt(0).toUpperCase() + myObj.name.slice(1) + "!'";
}

function randomPokemon() {
  if (document.getElementById("atk").innerHTML == 0) {
    loadPokemon(Math.floor(Math.random() * 800) + 2)
  }
}

//     function squirtle() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat
//
//
//         }
//         shake = document.getElementById("pokeImage");
//         shake.classList.remove("infinite");
//         typeChange();
//             }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt", true);
//       xhttp.send();
//   }
// // https://raw.githubusercontent.com/bemsuero/pokerepo/master/squirtle.txt
// // https://pokeapi.co/api/v2/pokemon/7/
//
//     function psyduck() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat
//         }
//         typeChange();
//             }
//
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/psyduck.txt", true);
//       xhttp.send();
//     }
// // https://raw.githubusercontent.com/bemsuero/pokerepo/master/psyduck.txt
// // https://pokeapi.co/api/v2/pokemon/54/
//
//     function growlithe() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat
//         }
//         typeChange();
//             }
//
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/growlithe.txt", true);
//       xhttp.send();
//     }
//
//     // https://raw.githubusercontent.com/bemsuero/pokerepo/master/growlithe.txt
//     // https://pokeapi.co/api/v2/pokemon/58/
//
//
//     function rapidash() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat,
//               // moves: myObj.
//         }
//         typeChange();
//             }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/rapidash.txt", true);
//       xhttp.send();
//     }
//   // https://raw.githubusercontent.com/bemsuero/pokerepo/master/rapidash.txt
//   // https://pokeapi.co/api/v2/pokemon/78/
//
//     function tangela() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat
//         }
//         typeChange();
//             }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/tangela.txt", true);
//       xhttp.send();
//     }
//     // https://raw.githubusercontent.com/bemsuero/pokerepo/master/tangela.txt
//     // https://pokeapi.co/api/v2/pokemon/114/
//
//     function regirock() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var myObj = JSON.parse(this.responseText);
//           document.getElementById("pokeName").innerHTML = myObj.name;
//           document.getElementById("pokeImage").src = myObj.sprites.front_default;
//           document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
//           document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
//           document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
//           document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
//           document.getElementById("abilityBox").innerHTML = "HP is: " + myObj.stats[5].base_stat + ". " + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";
//            pokemon = {
//               pokeName: myObj.name,
//               pokeImage: myObj.sprites.front_default,
//               pokeNumber: "Num " + myObj.id,
//               pokeType: myObj.types[0].type.name,
//               atk: myObj.stats[4].base_stat,
//               def: myObj.stats[3].base_stat,
//               hp: myObj.stats[5].base_stat
//         }
//         typeChange();
//             }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/pokerepo/master/regirock.txt", true);
//       xhttp.send();
//     }
    // https://raw.githubusercontent.com/bemsuero/pokerepo/master/regirock.txt
    // https://pokeapi.co/api/v2/pokemon/377/

    function adopt() {
      totalPokemon++;
      pokemonGet.push(pokemon);
        alert("You have " + totalPokemon + " pokemon")
        checkList();
}

function checkList() {
  var createList = document.createElement("P");
  i = 0;
  for (i = 0; i < pokemonGet.length; i++)
  var makePokemon = document.createTextNode(pokemonGet[i].pokeName.charAt(0).toUpperCase() + pokemonGet[i].pokeName.slice(1));
  var space = document.createTextNode(" ");
  createList.appendChild(makePokemon);
  document.getElementById("pokeList").appendChild(makePokemon);
  document.getElementById("pokeList").appendChild(space);
}


function addPokemonToList() {
  if ((document.getElementById("pokeName").innerHTML == "squirtle") || (document.getElementById("pokeName").innerHTML == "psyduck") || (document.getElementById("pokeName").innerHTML == "growlithe") || (document.getElementById("pokeName").innerHTML == "rapidash") || (document.getElementById("pokeName").innerHTML == "tangela") || (document.getElementById("pokeName").innerHTML == "regirock")) {
  }
  else {
    var createList = document.createElement("li");
    var pokeAdder = document.createTextNode(myObj.name.charAt(0).toUpperCase() + myObj.name.slice(1) + "    " + "    " + "    ");
    var pokeAdderNumber = document.createTextNode(myObj.id + " ");
    createList.appendChild(pokeAdder);
   document.getElementById("newPokemon").appendChild(pokeAdderNumber);
    document.getElementById("newPokemon").appendChild(pokeAdder);
  }
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

// {
// // "students" = {
// // "karl": {
// //   "course": "sei june 2018",
// // "age": 30,
// // "enrolled": true,
// // "skills": [javascript, HTML, CSS],
// // "enroll date": "june-23-2018"
// // }
// // }
// }


//details tag, check it out.
