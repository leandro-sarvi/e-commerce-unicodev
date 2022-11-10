import React from "react";
import video from "../../assets/video-banner.mp4";
import styles from "../Banner/Banner.module.css";
function Banner() {
  return (
    <div>
      <video autoPlay muted className={styles.video}>
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Banner;
