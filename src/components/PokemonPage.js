import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonData, setSearchVal, addPokemon}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setSearchVal={setSearchVal}/>
      <br />
      <PokemonCollection pokemonData={pokemonData} />
    </Container>
  );
}

export default PokemonPage;
