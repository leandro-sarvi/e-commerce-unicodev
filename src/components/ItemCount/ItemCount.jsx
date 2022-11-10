import React, { useState } from "react";
import {Link} from "react-router-dom"
import styles from "../ItemCount/ItemCount.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Alert from "@mui/material/Alert";
function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);
  const handleAdd = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };
  const handleSubtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.countContainer}>
        <div className={styles.flexCount}>
          <button onClick={handleSubtract} className={styles.btnRemove}>
          <RemoveIcon />
        </button>
        <em className={styles.label}>{count}</em>
        <button onClick={handleAdd} className={styles.btnAdd}>
          <AddIcon />
        </button></div>
        <button
        className={styles.btnCart}
        onClick={() => {
          onAdd(count)
        }}
      >
       <ShoppingCartIcon sx={{ fontSize: 15 }} /> Añadir 
      </button>
      </div>
      
    </div>
  );
}

export default ItemCount;
