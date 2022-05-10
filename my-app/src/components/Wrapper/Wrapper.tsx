import styles from "./wrapper.module.scss";
import Sidebar from "../sidebar/Sidebar";


const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar/>
    </div>
  )
}