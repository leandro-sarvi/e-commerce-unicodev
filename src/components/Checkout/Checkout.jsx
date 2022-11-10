import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import styles from "../Checkout/Checkout.module.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
function Checkout() {
  const { cart, total, clear } = useContext(CartContext);
  const [isValidated, setIsValidated] = useState(false);
  const [idVenta, setIdVenta] = useState("");
  const [loading, setLoading] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    finalizarCompra(data);
  };
  const finalizarCompra = (data) => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      comprador: { name:data.name, tel:data.tel,mail:data.mailConfirm },
      items: cart.map((prod) => {
        return {
          id: prod.id,
          title: prod.title,
          cantidad: prod.cantidad,
          price: prod.price * prod.cantidad,
        };
      }),
      total: total,
      date: serverTimestamp(),
    })
      .then((result) => {
        setIdVenta(result.id);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        clear();
        setIsValidated(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : isValidated ? (loading?(<Loading/>):(<>
        <header className={styles.header}>
          <h1>Detalle de la compra</h1>
          <hr className={styles.myBox}></hr>
        </header>
        <div className={styles.checkoutContainer}>
          <div className={styles.endCheckout}>
            <h1>Genial! Gracias por tu compra</h1>
            <p>
              Te enviaremos un correo cuando tu pedido salga de nuestro
              almacén.
            </p>
            <p>
              Tu código de referencia es: <b><Link to={`/compras/${idVenta}`}>{idVenta}</Link></b>
            </p>
            <Link to="/" className={styles.coolBtn}>
              Seguir comprando
            </Link>
          </div>
        </div>
      </>)
      ) : (
        <>
          <header className={styles.header}>
            <h1>Completa tus datos</h1>
            <hr className={styles.myBox}></hr>
          </header>
          <div className={styles.checkoutContainer}>
            {cart.lenght>0?(<form onSubmit={handleSubmit(onSubmit)} className={styles.formC}>
              <div className={styles.containerInput}>
                <label>Nombre:</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  {...register("name", { required: true, maxLength: 10 })}
                />
                {errors.nombre?.type === "required" && (
                  <p className={styles.cg}>El nombre es requerido</p>
                )}
              </div>
              <div className={styles.containerInput}>
                <label>Telefono:</label>
                <input
                  name="tel"
                  type="number"
                  placeholder="Telefono"
                  {...register("tel", { required: true })}
                ></input>
                {errors.tel?.type === "required" && (
                  <p className={styles.cg}>
                    El número de telefono es requerido
                  </p>
                )}
              </div>
              <div className={styles.containerInput}>
                <label>Email:</label>
                <input
                  name="contactEmail"
                  type="email"
                  placeholder="Email"
                  {...register("mail", {
                    required: true,
                    pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                  })}
                ></input>
                {errors.mail?.type === "required" && (
                  <p className={styles.cg}>El email es requerido</p>
                )}
                {errors.mail?.type === "pattern" && (
                  <p className={styles.cg}>El formato es incorrecto</p>
                )}
              </div>
              <div className={styles.containerInput}>
                <label>Confirmar email:</label>
                <input
                  name="confirmEmail"
                  type="email"
                  placeholder="Confirmar Email"
                  {...register("mailConfirm", {
                    required: true,
                    pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                  })}
                ></input>
                {errors.mailConfirm?.type === "required" && (
                  <p className={styles.cg}>El email es requerido</p>
                )}
                {errors.mailConfirm !== errors.mail && (
                  <p className={styles.cg}>Los correos no coinciden</p>
                )}
              </div>
              <button type="submit" className={styles.coolBtn}>
                Confirmar compra
              </button>
            </form>):(<Link to="/" className={styles.coolBtn}>
              Seguir comprando
            </Link>)}
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;
