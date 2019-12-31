
export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemons'
  })
);

