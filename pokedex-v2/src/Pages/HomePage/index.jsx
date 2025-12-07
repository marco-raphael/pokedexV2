import React, { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Div } from "./styles";
import CardHome from "../../components/Card";
import { useCoordinator } from "../../Router/useCoordinator";

function HomePage() {
  const { states, requests } = useContext(GlobalContext);
  const { goToDetail } = useCoordinator();

  const goToDetailPage = (name) => {
    goToDetail(name);
  };

  useEffect(() => {
    requests.getPokemons();
  }, [requests]);

  let arrayPokemons =
    states.pokemons.results &&
    states.pokemons.results.filter((pokemon) => {
      const isNotInPokedex = !(
        states.pokedex &&
        states.pokedex.some(
          (pokemonPokedex) => pokemonPokedex.name === pokemon.name
        )
      );

      return isNotInPokedex;
    });

  return (
    <>
      <Div>
        {!states.pokemons.results ? (
          <p>Loading</p>
        ) : arrayPokemons.length === 0 ? (
          <p>Não há Pokémons disponíveis.</p>
        ) : (
          arrayPokemons.map((pokemon) => {
            return (
              <CardHome
                key={pokemon.name}
                name={pokemon.name}
                order={pokemon.order}
                url={pokemon.url}
                add={() => requests.addPokemon(pokemon)}
                det={() => goToDetailPage(pokemon.name)}
              />
            );
          })
        )}
      </Div>
    </>
  );
}

export default HomePage;
