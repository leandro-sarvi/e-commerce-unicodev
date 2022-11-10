import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import NavBack from "../NavBack/NavBack";
import styles from "../ItemDetail/ItemDetail.module.css";
import { CartContext } from "../../context/CartContext";
function ItemDetail({ product }) {
  const [showItemCount, setItemCount] = useState(true);
  const { addItem } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    setItemCount(false);
  };
  return (
   <>
    <header className={styles.header}>
            <h1>Detalle de {product.title}</h1>
            <hr className={styles.myBox}></hr>
            <NavBack ruta="/" />
            </header>
    <div className={styles.containerDetail}>
      
      <div className={styles.detail}>
        <img src={product.image} alt="" />
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
          <em>${product.price}</em>
          {showItemCount ? (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          ) : (
            <div className={styles.flexBtn}>
              <Link to="/" className={styles.btnCart}>
                Seguir comprando
              </Link>
              <Link to="/cart" className={styles.btnCart2}>
                Continuar al carrito
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
   </>
  );
}

export default ItemDetail;
