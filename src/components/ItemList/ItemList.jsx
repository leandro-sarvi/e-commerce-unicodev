import React from 'react'
import styles from '../ItemList/ItemList.module.css'
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
function ItemList({onAdd, products}) {
  return (
    <section className={styles.container}>
<ItemCount initial={1} stock={15} onAdd={onAdd}/>
      {products.map((prod)=>{
       return  <Item key={prod.id} prod={prod}/>
      })}
    </section>
  )
}

export default ItemList