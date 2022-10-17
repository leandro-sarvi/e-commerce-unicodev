import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
function ItemListContainer() {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const { idCategory } = useParams();
  const URL_BASE = "https://fakestoreapi.com/products";
  const URL_CATEGORY = `${URL_BASE}/category/${idCategory}`;
  useEffect(() => {
    setloading(true);
    fetch(`${idCategory ? URL_CATEGORY : URL_BASE}`)
      .then((res) => res.json())
      .then((json) => setproducts(json))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [idCategory]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemList
          products={products}
          greeting={idCategory ? idCategory : "Las mejores ofertas"}
        />
      )}
    </>
  );
}

export default ItemListContainer;
