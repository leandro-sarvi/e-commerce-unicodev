import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";
import Nav from "./Nav";
function Navbar({toggle}) {
  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu} onClick={toggle}>
        <MenuIcon />
      </div>
      <div className={styles.mainTitle}>
        <a href="#" >
          unico<span className={styles.cg}>dev</span>
        </a>
      </div>
      <Nav styles={styles} />
      <CartWidget />
    </header>
  );
}

export default Navbar;
