const InitialState = {
  seenPokemons: []
};

function LastSeenRedeucer(state = InitialState, action) {
  switch (action.type) {
    case "PUSH_POKEMONS":
      console.log(state.seenPokemons, action.seenPokemons);
      return { seenPokemons: [...state.seenPokemons, action.seenPokemons] };
    default:
      return state;
  }
}

export default LastSeenRedeucer;

/* export default function(state = null, action) {
  switch (action.type) {
    case "POKEMON_SELECTED":
      return action.payload;
      break;
    default:
      return state;
  }
} */
