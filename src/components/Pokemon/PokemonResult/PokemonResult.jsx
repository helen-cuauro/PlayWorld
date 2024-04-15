import { useContext, useState } from "react";
import styles from "./styles.module.css";
import peso from "../../../assets/peso.svg";
import altura from "../../../assets/altura.svg";
import estrella from "../../../assets/estrella.svg";
import { useEffect } from "react";
import usePokemonSearch from "./usePokemonSearch.hook";
import useAddFavorito from "./useAddFavotitos.hook";
import { I18nContext } from "../../../locales/I18nContext"
import Type from "../PokemonsFavoritos/Type";

function PokemonResult({
  username,
  setGetFavoritos,
  removeFromFavorites,
  favoritos,
  selectedPokemonId,
}) {
  const { t } = useContext(I18nContext);
  const [pokemonName, setPokemonName] = useState("");
  const { pokemon, setIsSearching } = usePokemonSearch(pokemonName);
  const { result, addFavorito } = useAddFavorito(pokemon, username);

  // function addFavoriteHandler() {
  //   addFavorito(pokemon);
  // }

  function addOrRemoveFavoriteHandler() {
    if (isPokemonInFavorites()) {
      removeFromFavorites(pokemon.id);
    } else {
      addFavorito(pokemon);
    }
  }

  const isPokemonInFavorites = () => {
    return favoritos.some((fav) => fav.id === pokemon.id);
  };

  useEffect(() => {
    if (result) {
      setGetFavoritos(true);
    }
  }, [result, setGetFavoritos]);

  useEffect(() => {
    if (selectedPokemonId !== null) {
      // Buscar el Pokémon seleccionado por ID y establecer el nombre en el campo de búsqueda
      const selectedPokemon = favoritos.find(
        (fav) => fav.id === selectedPokemonId
      );
      if (selectedPokemon) {
        setPokemonName(selectedPokemon.name);
        setIsSearching(true); // Para realizar la búsqueda automáticamente al seleccionar un Pokémon
      }
    }
  }, [selectedPokemonId, favoritos, setIsSearching]);

  return (
    <div className={styles["busqueda-container"]}>
      <div className={styles.search}>
        <input
          id="pokemon"
          type="text"
          name="pokemon"
          required
          className={styles.input}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button className={styles.button} onClick={() => setIsSearching(true)}>
          {t("Search")}
        </button>
      </div>

      {pokemon && (
        <>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1 className={styles.name}>{pokemon.name}</h1>
              <span className={styles.id}>{`#${pokemon.id.toString().padStart(3, "0")}`}</span>
            </div>
            <div >
              <img
                className={styles.img}
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </div>
            <div className={styles["type-container"]}>
              {pokemon.types.map((type, key) => (
                <Type type={type.type.name} key={key} className={styles["type-pokemon"]}>
                  {type.type.name}
                </Type>
              ))}
            </div>
            <div className={styles.talla}>
              <div>
                <div className={styles.weight}>
                  <img src={peso} />
                  <span>{pokemon.weight / 10} kg</span>
                </div>
                <span className={styles.titleTalla}>weight</span>
              </div>
              <span className={styles.division}></span>
              <div>
                <div className={styles.height}>
                  <img src={altura} />
                  <span>{pokemon.height / 10} m</span>
                </div>
                <span className={styles.titleTalla}>height</span>
              </div>
            </div>
          </div>

          <div>
            <button
              className={styles["favorito-btn"]}
              onClick={addOrRemoveFavoriteHandler}
            >
              {" "}
              <img src={estrella} />
              {isPokemonInFavorites()
                ? t("Remove pokemon")
                : t("Add favorite")}
            </button>
          </div>
        </>
      )}

      {!pokemon && (
        <>
          <h1>{t("There isn't pokemon")}</h1>
        </>
      )}
    </div>
  );
}
export default PokemonResult;
