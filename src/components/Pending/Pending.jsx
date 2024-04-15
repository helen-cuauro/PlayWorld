import { useContext } from "react";
import styles from "./Pending.module.css";
import { ProjectContext } from "../../contexts/ProjectContext";
import { I18nContext } from "../../locales/I18nContext";
function Pending({ project }) {
  const {t} = useContext(I18nContext)
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <h1>{`${project} ${t("is currently under construction...")}`}</h1>
      </div>
    </section>
  );
}

export default Pending