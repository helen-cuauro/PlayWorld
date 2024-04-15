import { useCallback, useState } from "react";

const useAddFavorito = (pokemon, username) => {
  const [result, setResult] = useState(null);

  const apiUrl = `https://poke-collection-lite-production.up.railway.app/api/${username}/favorites`;

  const addFavorito = useCallback(() => {
    if (pokemon) {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/8.3.0",
        },
        body: JSON.stringify({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((type) => type.type.name),
          avatarUrl: pokemon.sprites.other.dream_world.front_default,
        }),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setResult(data);
        })
        .catch((error) => {
          console.error("Error al agregar a favoritos:", error);
        });

      return result;
    }
  }, [pokemon, result]);

  return { result, addFavorito };
};

export default useAddFavorito;
