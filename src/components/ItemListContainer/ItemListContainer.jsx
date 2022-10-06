import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
function ItemListContainer({ greeting }) {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproducts(json))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);

  return (
    <>
      <h1>{greeting}</h1>

      {loading ? <Loading /> : <ItemList onAdd={onAdd} products={products} />}
    </>
  );
}

export default ItemListContainer;
