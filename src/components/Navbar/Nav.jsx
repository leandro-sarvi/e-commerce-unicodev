import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Nav({ styles }) {
  const categorias = [
    { id: 1, categoria: "Celulares", ruta: "/category/celulares" },
    { id: 2, categoria: "Televisores", ruta: "/category/televisores" },
    { id: 3, categoria: "Informática", ruta: "/category/informatica" },
  ];
  return (
    <nav className={styles.Nav}>
      <ul>
        {categorias.map((cat) => {
          return (
            <li key={cat.id}>
              <NavLink
                to={cat.ruta}
                style={({ isActive }) => ({
                  color: isActive ? "#00b3d4" : "#ccc",
                })}
              >
                <Button color="inherit"><KeyboardDoubleArrowRightIcon fontSize="medium"/>{cat.categoria}</Button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
