import DisplayProject from "../DisplayProject";
import styles from "./Projects.module.css";
import tictac from "../../assets/tictac.png";
import pokeapi from "../../assets/pokeapi.png";
import wordle from "../../assets/wordle.png";
import youtube from "../../assets/youtube.png";
function Project() {
  return (
    <section className={styles.projects}>
      <div className={styles.wrapper}>
        <DisplayProject
          img={tictac}
          title={"ReactDev Tic-Tac-Toe"}
          labels={[
            "useState",
            "useContext",
            "useEffect",
            "localStore",
            "CssModules",
          ]}
        />
        <DisplayProject
          img={pokeapi}
          title={"Poke Collection"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        />
        <DisplayProject
          img={wordle}
          title={"React Wordle"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        />
        <DisplayProject
          img={youtube}
          title={"Video Feed"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        />
      </div>
    </section>
  );
}

export default Project;
