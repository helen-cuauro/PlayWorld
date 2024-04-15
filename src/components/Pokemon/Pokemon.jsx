import Welcome from "./Welcome";
import PokemonResult from "./PokemonResult";
import PokemonsFavoritos from "./PokemonsFavoritos";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function Pokemon() {
  const [username, setUsername] = useState(() =>
    window.localStorage.getItem("username")
  );

  const [favoritos, setFavoritos] = useState([]);
  const [getFavoritos, setGetFavoritos] = useState(true);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const apiUrl = `https://poke-collection-lite-production.up.railway.app/api/${username}/favorites`;

  useEffect(() => {
    window.localStorage.setItem("username", username);
    setGetFavoritos(true);
  }, [username]);

  useEffect(() => {
    if (getFavoritos && username) {
      fetch(apiUrl)
        .then((result) => result.json())
        .then((result) => setFavoritos(result.data));

      setGetFavoritos(false);
    }
  }, [getFavoritos, apiUrl]);

  const removeFromFavorites = (pokemonId) => {
    const updatedFavorites = favoritos.filter((fav) => fav.id !== pokemonId);
    setFavoritos(updatedFavorites);

    // Eliminar el favorito en la API
    fetch(`${apiUrl}/${pokemonId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/8.3.0",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })

      .catch((error) => {
        console.error("Error al eliminar de favoritos en la API:", error);
      });
  };

  const handleCardClick = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
  };

  function onFormSubmit(value) {
    setUsername(value);
  }

  function onExit() {
    setUsername("");
    setFavoritos([]);
    setSelectedPokemonId(null);
  }

  return (
    <>
      {!username ? (
        <Welcome onFormSubmit={onFormSubmit} />
      ) : (
        <section className={styles.container}>
          <div className={styles["white-box"]}>
            <PokemonResult
              username={username}
              setGetFavoritos={setGetFavoritos}
              removeFromFavorites={removeFromFavorites}
              favoritos={favoritos}
              selectedPokemonId={selectedPokemonId}
            />
            <PokemonsFavoritos
              onExit={onExit}
              favoritos={favoritos}
              onCardClick={handleCardClick}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Pokemon;
