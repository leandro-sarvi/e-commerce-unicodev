import React from "react";
import styles from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
function Dropdown({ open, toggle }) {
  const categorias = [
    { id: 1, categoria: "Celulares", ruta: "/category/celulares" },
    { id: 2, categoria: "Televisores", ruta: "/category/televisores" },
    { id: 3, categoria: "Informática", ruta: "/category/informatica" },
  ];
  return (
    <div className={open ? styles.open : styles.disguise}>
      <nav className={styles.dropdown}>
        <ul>
          <li onClick={toggle} className={styles.flexDrop}>
          <h3>unico<span className={styles.cg}>dev</span></h3>
            <CloseIcon fontSize="large"/>
          </li>
          <hr className={styles.myBox}></hr>
          {categorias.map((cat) => {
            return (
              <li key={cat.id}>
                <NavLink to={cat.ruta} style={({ isActive }) => ({
    color: isActive ? '#00b3d4' : '#ccc'
  })} onClick={toggle}>{cat.categoria}</NavLink>
              </li>
            );
          })}
          <hr className={styles.myBox}></hr>
          <li className={styles.liLinks}>
            <InstagramIcon/>
            <FacebookIcon/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
