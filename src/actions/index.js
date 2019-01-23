export const select = seenPokemons => {
  return {
    type: "PUSH_POKEMONS",
    seenPokemons
  };
};
