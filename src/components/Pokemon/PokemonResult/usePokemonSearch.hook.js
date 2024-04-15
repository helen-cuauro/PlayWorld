import { useEffect, useState } from "react";

const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";

const usePokemonSearch = (pokemonName) => {
  const [pokemon, setFoundPokemon] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching) {
      fetch(`${pokeAPIURL}/${pokemonName}`)
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          setFoundPokemon(result);
          setIsSearching(false);
        })
        .catch(() => {
          setIsSearching(false);
        });
    }
  }, [pokemonName, isSearching, setIsSearching]);

  return { pokemon, isSearching, setIsSearching };
};

export default usePokemonSearch;
