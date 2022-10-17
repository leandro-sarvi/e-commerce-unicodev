import React from "react";
import styles from "../ItemList/ItemList.module.css";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import Banner from "../Banner/Banner";
import { MdDoubleArrow } from 'react-icons/md';
function ItemList({ products, greeting }) {
  return (
    
    <>
    <Banner />
    <h1 className={styles.title}><MdDoubleArrow/>{greeting}</h1>
    <section className={styles.container}>
      {products.length > 0 ? (
        products.map((prod) => {
          return <Item key={prod.id} prod={prod} />;
        })
      ) : (
        <Loading />
      )}
    </section></>
  );
}

export default ItemList;
