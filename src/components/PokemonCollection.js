import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {
  const oneCard = pokemonData.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })
  return (
    <Card.Group itemsPerRow={6}>
      {oneCard}
    </Card.Group>
  );
}

export default PokemonCollection;
