import React from "react";
import celular from "../../assets/sansung-galaxy-22.png";
import style from "../Item/Item.module.css";
function Item({prod}) {
  return (
    <div className={style.card}>
      <div className={style.cuotas}>
        <h6>3</h6>
        <div className={style.sinInteres}>
          <span>Cuotas</span>
          <span>s / interés</span>
        </div>
      </div>
      <img src={prod.image} alt='item-product'></img>
      <div className={style.info}>
        <h3 className={style.h3}>{prod.category}</h3>
        <p>{prod.title}</p>
        <p className={style.price}>${prod.price}</p>
      </div>
      <button className={style.Button}>Ver más</button>
    </div>
  );
}

export default Item;
