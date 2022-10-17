import React from "react";
import style from "../Item/Item.module.css";
import { Link } from "react-router-dom";
function Item({ prod }) {
  const URL_ITEM=`/products/${prod.id}`
  return (
    <div className={style.card}>
      <div className={style.cuotas}>
        <h6>3</h6>
        <div className={style.sinInteres}>
          <span>Cuotas</span>
          <span>s / interés</span>
        </div>
      </div>
      <img src={prod.image} alt="item-product"></img>
      <div className={style.info}>
        <h3 className={style.h3}>{prod.category}</h3>
        <p>{prod.title}</p>
        <em className={style.price}>${prod.price}</em>
      </div>
      <Link to={URL_ITEM}><button className={style.Button}>Ver más</button></Link>
    </div>
  );
}

export default Item;
