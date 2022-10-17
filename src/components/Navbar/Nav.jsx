import React from "react";
import Button from "@mui/material/Button";
import {Link, NavLink} from 'react-router-dom'
function Nav({ styles }) {
  const categorias = [
    { id: 1, categoria: "electronics", ruta: "/category/electronics" },
    { id: 2, categoria: "jewelery", ruta: "/category/jewelery" },
    { id: 3, categoria: "men's clothing", ruta: "/category/men's clothing" },
  ];
  return (
    <nav className={styles.Nav}>
      <ul>
        {categorias.map((cat) => {
          return (
            <li key={cat.id}>
             <NavLink  to={cat.ruta} style={({ isActive }) => ({
    color: isActive ? '#00b3d4' : '#ccc'
  })}><Button color="inherit">{cat.categoria}</Button></NavLink>
              
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
