import React from "react";
import style from "../Item/Item.module.css";
import { Link } from "react-router-dom";
function Item({ prod }) {
  const URL_ITEM=`/products/${prod.id}`
  return (
    <Link to={URL_ITEM} className={style.card}>
      <img src={prod.image} alt="item-product"></img>
      <div className={style.cardDetail}>
      <div className={style.cuotas}>
        <h6>3</h6>
        <div className={style.sinInteres}>
          <span>Cuotas</span>
          <span>s / interés</span>
        </div>
      </div>
      
      <div className={style.info}>
        <h3 className={style.h3}>{prod.title}</h3>
        <p>{prod.description}</p>
        <em className={style.price}>${prod.price}</em>
      </div>
      </div><button className={style.Button}>Ver más</button>
    </Link>
  );
}

export default Item;
