import { useContext } from "react";
import styles from "./styles.module.css";
import pokemon from "../../../assets/pokemon.png";
import { I18nContext } from "../../../locales/I18nContext";
// import { useEffect, useState } from "react";
import React from "react";

function Welcome({ onFormSubmit }) {
  const { t } = useContext(I18nContext);
  const [value, setValue] = React.useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(value);
  }

  return (
    <section className={styles.container}>
      <div className={styles["container-pokemon"]}>
        <img src={pokemon} alt="pokemon" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder={t("username")}
            name="username"
            required
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            {t("Enter")}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Welcome;
