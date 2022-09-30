import React, { useState } from "react";
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
  const addToCart = (count) => {
    if (stock > 0) {
      onAdd(count);
    }
  };
  return (
    <div>
      <div className={styles.countContainer}>
        <button onClick={handleSubtract} className={styles.btnRemove}>
          <RemoveIcon />
        </button>
        <h1 className={styles.label}>{count}</h1>
        <button onClick={handleAdd} className={styles.btnAdd}>
          <AddIcon />
        </button>
      </div>
      <button
        className={styles.btnCart}
        onClick={() => {
          addToCart(count);
        }}
      >
       <ShoppingCartIcon /> Añadir 
      </button>
    </div>
  );
}

export default ItemCount;
