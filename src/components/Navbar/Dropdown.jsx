import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
function Dropdown({ open, toggle }) {
  const categorias = [
    { id: 1, categoria: "electronics", ruta: "/category/electronics" },
    { id: 2, categoria: "jewelery", ruta: "/category/jewelery" },
    { id: 3, categoria: "men's clothing", ruta: "/category/men's clothing" },
  ];
  return (
    <div className={open ? styles.open : styles.disguise}>
      <nav className={styles.dropdown}>
        <ul>
          {categorias.map((cat) => {
            return (
              <li key={cat.id}>
                <NavLink to={cat.ruta} style={({ isActive }) => ({
    color: isActive ? '#00b3d4' : '#ccc'
  })} onClick={toggle}>{cat.categoria}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
