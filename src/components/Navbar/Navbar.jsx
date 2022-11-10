import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from "./CartWidget";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Navbar({ toggle }) {
  const { qty } = useContext(CartContext);
  return (
    <>
      <div className={styles.info}>
        <InstagramIcon />
        <FacebookIcon />
      </div>
     {qty>0?( <header className={styles.header}>
        <div className={styles.burgerMenu} onClick={toggle}>
          <MenuIcon fontSize="large"/>
        </div>
        <div className={styles.mainTitle}>
          <Link to="/">
            unico<span className={styles.cg}>dev</span>
          </Link>
        </div>
        <Nav styles={styles} />
        <div>
        <SearchIcon/>
        <Link to="/cart">
          <CartWidget />
        </Link>
        </div>
      </header>):( <header className={styles.header}>
        <div className={styles.burgerMenu} onClick={toggle}>
          <MenuIcon  fontSize="large"/>
        </div>
        <div className={styles.mainTitle}>
          <Link to="/">
            unico<span className={styles.cg}>dev</span>
          </Link>
        </div>
        <Nav styles={styles} />
        <SearchIcon/>
      </header>)}
    </>
  );
}

export default Navbar;
