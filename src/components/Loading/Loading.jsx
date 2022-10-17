import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import styles from '../Loading/Loading.module.css'
function Loading(loading) {
  return (
    <div className={styles.loading}>
      <PuffLoader color={"#00a6d6"} loading={loading} size={60} />
      <h3>cargan<span className={styles.cg}>do</span></h3>
    </div>
  );
}

export default Loading;