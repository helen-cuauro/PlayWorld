import styles from "./Type.module.css";
import { I18nContext } from "../../../../locales/I18nContext";
import { useContext } from "react";
function Type({ type, id }) {
  const {t} = useContext(I18nContext)
  let className = `${styles["base-type"]} ${styles[type]}`;
  return (
    <span className={className} id={id}>
      {t(type)}
    </span>
  );
}

export default Type;
