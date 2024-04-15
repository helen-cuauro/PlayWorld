import { useContext, useState } from "react";
import styles from "./GameInfo.module.css";
import { I18nContext } from "../../locales/I18nContext"
function GameInfo({ moves, handleReset }) {
  const {t} = useContext(I18nContext)
  return (
    <div className={styles.container}>
      <button className={styles.reset} onClick={handleReset}>{t("Reset")}</button>

      <div className={styles.body}>
        <span>{t("Go to")}:</span>
        <div className={styles.grid}>
          {moves}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
