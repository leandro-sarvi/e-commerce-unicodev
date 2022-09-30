import React from "react";
import celular from "../../assets/sansung-galaxy-22.png";
import style from "../Item/Item.module.css";
function Item() {
  return (
    <div className={style.card}>
      <div className={style.cuotas}>
        <h6>3</h6>
        <div className={style.sinInteres}>
          <span>Cuotas</span>
          <span>s / interés</span>
        </div>
      </div>
      <img src={celular} alt='item-product'></img>
      <div className={style.info}>
        <h3 className={style.h3}>SANSUNG</h3>
        <p>SAMSUNG GALAXY S22 BLANCO 8/128GB 6.1”</p>
        <p className={style.price}>$215.000</p>
      </div>
      <button className={style.Button}>Ver más</button>
    </div>
  );
}

export default Item;
