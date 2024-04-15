/* eslint-disable react/prop-types */
import Labels from "../Labels";
import styles from "./DisplayProject.module.css";
import { ProjectContext } from "../../contexts/ProjectContext";
import * as React from "react";
function DisplayProject({ img, title, labels }) {
  const {setProject} = React.useContext(ProjectContext)
  function handleProject() {
    setProject(title)
    console.log(title)
  }
  return (
    <div className={styles.card} onClick={handleProject}>
      <div className={styles.head}>
        <img src={img} alt="" />
      </div>
      <div className={styles.body}>
        <h1>{title}</h1>
        <div className={styles["labels-container"]}>
          {labels.map(label => <Labels key={label} name={label}/>)}
        </div>
      </div>
    </div>
  );
}

export default DisplayProject;
