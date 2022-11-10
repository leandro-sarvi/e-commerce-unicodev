import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import styles from "../ItemDetailContainer/ItemDetailContainer.module.css";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
function ItemDetailContainer() {
  const [loading, setloading] = useState(true);
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  const productsCollection = collection(db, "productos");
  const refDoc = doc(productsCollection, id)
  useEffect(() => {
    setloading(true);
    getDoc(refDoc)
      .then((result) => setproduct({...result.data(),id:result.id}))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
