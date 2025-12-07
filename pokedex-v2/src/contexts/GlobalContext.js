import { createContext } from "react";

const INITIAL_VALUE = {
  states: {
    pokemons: { results: [] },
    details: {},
    url: "",
    pokedex: [],
  },
  requests: {
    getPokemons: () => {},
    getDetail: () => {},
    addPokemon: () => {},
    removePokedex: () => {},
  },
  setters: {},
};

const GlobalContext = createContext(INITIAL_VALUE);
export default GlobalContext;
