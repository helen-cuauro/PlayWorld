import styles from "./Labels.module.css"
function Labels({name}){
  return <span className={styles.label}>{name}</span>
}

export default Labels