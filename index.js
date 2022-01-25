const axios = require("axios");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Give me a pokemon number: ", (pokeId) => {
  findPokemon(pokeId);
  readline.close();
});

async function findPokemon(id) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  console.log(pokemon.data.name);
  return;
}
