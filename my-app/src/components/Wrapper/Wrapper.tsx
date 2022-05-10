import styles from "./wrapper.module.scss";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Main from "../Main/Main";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Wrapper;
