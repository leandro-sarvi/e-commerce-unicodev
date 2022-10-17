import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "../ItemDetail/ItemDetail.module.css";
function ItemDetail({ product }) {
  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  };
  return (
    <div className={styles.containerDetail}>
      <div className={styles.detail}>
        <img src={product.image} alt="" />
        <div className={styles.info}>
        <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <em>${product.price}</em>
          <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
