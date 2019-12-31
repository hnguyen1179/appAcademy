
const selectAllPokemons = (state) => {
  if (!state.entities.pokemons) {
    return [];
  } else {
    return Object.values(state.entities.pokemons);
  }
};

export default selectAllPokemons;
