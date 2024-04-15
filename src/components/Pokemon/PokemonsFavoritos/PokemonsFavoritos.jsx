import { useContext } from "react";
import { I18nContext } from "../../../locales/I18nContext";
import styles from "./styles.module.css";
import PokemonsFavoritosCard from "./PokemonFavoritosCard/PokemonFavoritosCard";

function PokemonsFavoritos({ onExit, favoritos, onCardClick }) {
  const {t} = useContext(I18nContext)
  return (
    <div className={styles.favoritosContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{t("Favorites")}</h1>
        <button className={styles["exit-btn"]} onClick={onExit}>
          {t("Exit")}
        </button>
      </div>

      <div className={styles.pokemonFavoritosCards}>
        {favoritos.map((pokemon, key) => (
          <PokemonsFavoritosCard
            pokemon={pokemon}
            key={key}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonsFavoritos;
