import React from "react";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import PokemonCard from "../../components/PokemonCard";
import styled from "styled-components";
import { useCoordinator } from "../../Router/useCoordinator";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function PokedexPage() {
  const { states, requests } = useContext(GlobalContext);
  const { goToDetail } = useCoordinator();

  const goToDetailPage = (name) => {
    goToDetail(name);
  };

  const pokedexList = states.pokedex.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.url}
        name={pokemon.name}
        order={pokemon.order}
        url={pokemon.url}
        add={() => requests.addPokemon(pokemon)}
        det={() => goToDetailPage(pokemon.name)}
        del={() => requests.removePokedex(pokemon)}
      />
    );
  });

  return <Div>{pokedexList === [] ? <p>Loading</p> : pokedexList}</Div>;
}

export default PokedexPage;
