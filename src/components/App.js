import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemonData, setPokemonData] = useState([])
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(setPokemonData)
  }, [])  

  function addPokemon(newPokemon) {
    setPokemonData([...pokemonData, newPokemon])
  }

  return (
    <div className="App">
      <PokemonPage 
      pokemonData={pokemonData.filter(pokemon => pokemon.name.includes(searchVal))} 
      setSearchVal={setSearchVal}
      addPokemon={addPokemon}
      />
    </div>
  );
}

export default App;
