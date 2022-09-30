import React from "react";
import Button from "@mui/material/Button";
function Nav({ styles }) {
  const categorias = [
    { id: 1, categoria: "Celulares" },
    { id: 2, categoria: "Televisores" },
    { id: 3, categoria: "Accesorios" },
  ];
  return (
    <nav className={styles.Nav}>
      <ul>
        {categorias.map((cat) => {
          return (
            <li key={cat.id}>
              <Button href="#">{cat.categoria}</Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
