import ProjectProvider, { ProjectContext } from "../../contexts/ProjectContext";
import Projects from "../Projects";
import TicTacToe from "../TicTacToe";
import Pokemon from "../Pokemon";
import styles from "./Main.module.css";
import * as React from "react";
import Pending from "../Pending";

function Main() {
  const {project} = React.useContext(ProjectContext)
  return (
    <section className={styles.main}>
      {!project && <Projects />}
      {project === "ReactDev Tic-Tac-Toe" && <TicTacToe />}
      {project === "Poke Collection" && <Pokemon />}
      {project === "React Wordle" && <Pending project={project}/>}
      {project === "Video Feed" && <Pending project={project}/>}
    </section>
  );
}

export default Main;
