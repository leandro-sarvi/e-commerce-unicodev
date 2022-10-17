import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import styles from "../ItemDetailContainer/ItemDetailContainer.module.css"
function ItemDetailContainer() {
  const [loading, setloading] = useState(true);
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setloading(true);
    fetch(`https://fakestoreapi.com/products/` + id)
      .then((res) => res.json())
      .then((json) => setproduct(json))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [id]);

  return (
<div className={styles.detailContainer}>
{loading?(<Loading />):(<ItemDetail product={product}/>)}
</div>

  );
}

export default ItemDetailContainer;
