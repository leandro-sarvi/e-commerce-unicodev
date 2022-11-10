import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
function ItemListContainer() {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const { idCategory } = useParams();
  const productsCollection = collection(db, "productos");
  const categoria = query(productsCollection, where('categoria','==',`${idCategory}`))
  useEffect(() => {
    setloading(true);
    //getDocs nos retorna una promise
    getDocs(idCategory?(categoria):(productsCollection))
      .then((result) => {
        const listProducts = result.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setproducts(listProducts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setTimeout(() => {
          setloading(false)
        }, 1500);
      });
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
