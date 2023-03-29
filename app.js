"use strict";

window.addEventListener("load", initApp);

console.log("JS kører");

async function initApp() {
  console.log("iniApp is running");
  const pokemon = await getData();
  pokemon.forEach(showPokemonList);
//   showPokemonList(pokemon);
}

async function getData(url) {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = await response.json();
  return data;
}

function showPokemonList(pokemon) {
  const html =
    /*html*/
    `<table>
        <tr>
          <td>${pokemon.name}</td>
          <td><img src="${pokemon.image}"></td>
          <td>${pokemon.dexindex}</td>
          <td>${pokemon.type}</td>
        </tr>
     `;

  document.querySelector("#pokemons").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#pokemons table:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon) {
  console.log(pokemon);

  // Generation undefined or null
  let generation = generateGeneration(pokemon);
  document.querySelector(
    "#dialog-generation"
  ).textContent = `Generation: ${generation}`;

  // canEvolve true, false or undefined
  let canEvolve = generateCanEvolve(pokemon);
  document.querySelector(
    "#dialog-canEvolve"
  ).textContent = `Evolve: ${canEvolve}`;

  document.querySelector("#dialog-name").textContent = `Name: ${pokemon.name}`;
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector(
    "#dialog-description"
  ).textContent = `Description: ${pokemon.description}`;
  document.querySelector(
    "#dialog-height"
  ).textContent = `Height: ${pokemon.height} cm`;
  document.querySelector("#dialog-weight").textContent = `Weight: ${
    pokemon.weight / 1000
  } kg`;
  document.querySelector(
    "#dialog-ability"
  ).textContent = `Ability: ${pokemon.ability}`;
  document.querySelector(
    "#dialog-gender"
  ).textContent = `Gender: ${pokemon.gender}`;
  // document.querySelector(
  // "#dialog-generation"
  // ).textContent = `Generation: ${pokemon.generation}`;
  document.querySelector("#dialog-footprint").src = pokemon.footprint;
  // document.querySelector(
  // "#dialog-canEvolve"
  // ).textContent = `Evolve: ${pokemon.canEvolve}`;
  document.querySelector(
    "#dialog-dexindex"
  ).textContent = `Dexindex: ${pokemon.dexindex}`;
  document.querySelector("#dialog-type").textContent = `Type: ${pokemon.type}`;

  document.querySelector(
    "#dialog-subtype"
  ).textContent = `Subtype: ${pokemon.subtype}`;

  document.querySelector(
    "#dialog-weaknesses"
  ).textContent = `Weaknesses: ${pokemon.weaknesses}`;

  document.querySelector(
    "#dialog-spilversion"
  ).textContent = `Game version: ${pokemon.spilversion}`;

  document.querySelector(
    "#dialog-statsHP"
  ).textContent = `HP: ${pokemon.statsHP}`;

  document.querySelector(
    "#dialog-statsAttack"
  ).textContent = `Attack: ${pokemon.statsAttack}`;

  document.querySelector(
    "#dialog-statsDefence"
  ).textContent = `Defence: ${pokemon.statsDefence}`;

  document.querySelector(
    "#dialog-statsSpecialAttack"
  ).textContent = `Special attack: ${pokemon.statsSpecialAttack}`;

  document.querySelector(
    "#dialog-statsSpecialDefence"
  ).textContent = `Special defence: ${pokemon.statsSpecialDefence}`;

  document.querySelector(
    "#dialog-statsSpeed"
  ).textContent = `Statsspeed: ${pokemon.statsSpeed}`;

  document.querySelector(
    "#dialog-ability"
  ).textContent = `Ability: ${pokemon.ability}`;
  document.querySelector("#dialog_window").showModal();
}

function generateGeneration(pokemon) {
  console.log("Vises dette?");
  let generation = pokemon.generation;
  if (
    pokemon.generation === undefined ||
    pokemon.generation === null ||
    pokemon.generation === "undefined"
  ) {
    generation = `${pokemon.name}'s generation is unknown`;
    console.log(generation);
  }
  return generation;
}

function generateCanEvolve(pokemon) {
  console.log("Vises dette?");
  let canEvolve = pokemon.canEvolve;
  if (pokemon.canEvolve === true) {
    canEvolve = `${pokemon.name} can evolve`;
    console.log(canEvolve);
  } else if (pokemon.canEvolve === false) {
    canEvolve = `${pokemon.name} can't evolve`;
  } else {
    canEvolve = `Unknown`;
  }

  return canEvolve;
}
