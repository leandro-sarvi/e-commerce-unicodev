import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import styles from '../Loading/Loading.module.css'
function Loading(loading) {
  return (
    <div className={styles.loading}>
      <h3>cargan<span className={styles.cg}>do</span></h3>
      <PuffLoader color={"#441285"} loading={loading} size={60} />
    </div>
  );
}

export default Loading;