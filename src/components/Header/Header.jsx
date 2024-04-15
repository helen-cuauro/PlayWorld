import styles from "./Header.module.css";
import spanish from "../../assets/spanish.png";
import english from "../../assets/english.png";
import Language from "../Language";
import React from "react";
import { ProjectContext } from "../../contexts/ProjectContext";

function Header() {
  const { project, setProject } = React.useContext(ProjectContext);
  function handleIndex() {
    setProject(null);
  }
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title} onClick={handleIndex}>
          React Showcase
        </h1>
        {project && <span className={styles.project}>{project}</span>}
        <div className={styles["language-container"]}>
          <Language id="es" src={spanish} alt="spanish" />
          <Language id="en" src={english} alt="english" />
        </div>
      </div>
    </header>
  );
}

export default Header;
