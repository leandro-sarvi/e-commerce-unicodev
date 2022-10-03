import React from 'react'
import styles from './Navbar.module.css'
function Dropdown({open}) {
    const categorias = [
        { id: 1, categoria: "Celulares" },
        { id: 2, categoria: "Televisores" },
        { id: 3, categoria: "Accesorios" },
      ];
      return (
        <div className={open?styles.open:styles.disguise}>
        <nav className={styles.dropdown}>
          <ul>
            {categorias.map((cat) => {
              return (
                <li key={cat.id}>
                  <a href="#">{cat.categoria}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      );
}

export default Dropdown