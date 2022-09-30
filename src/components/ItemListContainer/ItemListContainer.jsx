import React from "react";
import styles from "../ItemListContainer/ItemList.module.css";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
function ItemListContainer({ greeting }) {
  const onAdd=(count)=>{
    console.log(`El usuario quiere agregar ${count} productos`);
  }
  return (
    <>
    <h1>{greeting}</h1>
    <section className={styles.container}>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
    </>
  );
}

export default ItemListContainer;
