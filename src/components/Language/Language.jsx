/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Language.module.css";
import { I18nContext } from "../../locales/I18nContext";
function Language({ id, src, alt }) {
  const { setLanguage, language } = useContext(I18nContext);
  const isActive = language === id;
  let className = `${styles["img-container"]}`;
  function handleClick(e) {
    console.log(e.currentTarget.id);
    setLanguage(e.currentTarget.id);
    className += ` ${styles.active}`;
    console.log("click on language", className);
  }

  return (
    <span
      id={id}
      className={`${styles["img-container"]} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      
      <img className={styles.img} src={src} alt={alt} />
    </span>
  );
}

export default Language;
