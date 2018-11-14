console.log("Everything is in control")

pokemonPage = {
  pokedex: "images/" + "pokedex.png",
  startScreen: "images/" + "startScreenUpdate.png",
  pressStart: "images/" + "pressStart.png",
  pokemonHeading: "Pokemon Version 2.5"
}

var a = document.getElementById("pokedex");
a.src = pokemonPage.pokedex;

var b = document.getElementById("startScreen");
b.src = pokemonPage.startScreen;

var c = document.getElementById("heading");
c.innerHTML = pokemonPage.pokemonHeading;

var startFlash = document.getElementById("pressStart");
startFlash.src = pokemonPage.pressStart;



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

function openBall() {
shake = document.getElementById("pokeImage");
shake.classList.remove("infinite");
}
var color = document.getElementById("pokeType");
var color2 = document.getElementById("pokeType2")

function removeClasses() {
color.className = "";
}

function removeClasses2() {
color.className = "";
}

function typeChange() {
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
      document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
      document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
      document.getElementById("abilityBox").innerHTML = "This pokemon's HP is " + myObj.stats[5].base_stat + " and it's abilitiy is " + myObj.abilities[0].ability.name + ". ";

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
    typeChange();
    openBall();
    addPokemonToList();
    document.getElementById("moveList").innerHTML = " ";
        }
  };
  xhttp.open("GET", "https://fizal.me/pokeapi/pokemon/" + pokemon, true);
  xhttp.send();
}


document.getElementById("pokeImage").addEventListener("click", displayStats);

function displayStats() {
randomPokemon();
document.getElementById("moveList").innerHTML = "'My Moves are': " + myObj.moves[0].move.name + ", " +  myObj.moves[1].move.name + ", " + myObj.moves[2].move.name + ", and " + myObj.moves[3].move.name + ". " + "'" + myObj.name.charAt(0).toUpperCase() + myObj.name.slice(1) + "!'";
}

function randomPokemon() {
  if (document.getElementById("atk").innerHTML == 0) {
    loadPokemon(Math.floor(Math.random() * 800) + 2)
  }
}


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
