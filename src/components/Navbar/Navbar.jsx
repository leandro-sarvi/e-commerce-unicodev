import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Navbar({ toggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu} onClick={toggle}>
        <MenuIcon />
      </div>
      <div className={styles.mainTitle}>
        <Link to="/">
          unico<span className={styles.cg}>dev</span>
        </Link>
      </div>
      <Nav styles={styles} />
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
}

export default Navbar;
