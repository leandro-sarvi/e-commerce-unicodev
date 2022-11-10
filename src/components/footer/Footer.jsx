import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from "../footer/Footer.module.css"
function Footer() {
  return (
    <footer>
      <div className={styles.footerMain}>
        <div className={styles.footerFlex}>
          <div>
            <h4 className={styles.myBox}>
              Unico<span className={styles.cg}>dev</span>
            </h4>
            <p>Experiencias digitales.</p>
          </div>
          <div>
            <h4 className={styles.myBox}>Síguenos.</h4>
            <div className={styles.listLinks}>
              <a href="#">
                <FacebookIcon/>
              </a>
              <a href="#">
                <InstagramIcon/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.copyright}>
          <span>
            Hecho con <FavoriteIcon/> por
          </span>
          <span> unicodev TEAM 2022 <CopyrightIcon/> All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
