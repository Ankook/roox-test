import styles from "./main.module.scss";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
};

export default Main;
