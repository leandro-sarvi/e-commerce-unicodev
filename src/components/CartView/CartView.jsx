import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBack from "../NavBack/NavBack";
import styles from "../CartView/CartView.module.css";
function CartView() {
  const { cart, removeItem, total, qty, clear } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : cart.length === 0 ? (
        <>
          <div className={styles.header}>
            <NavBack ruta="/" />
          </div>
          <div className={styles.emptyCart}>
            <ShoppingCartIcon />
            <h1>CARRITO VACIO</h1>
            <hr className={styles.myBox}></hr>
          </div>
        </>
      ) : (
        <>
          <header className={styles.header}>
            <h1>Tu carrito ({qty})</h1>
            <hr className={styles.myBox}></hr>
            <NavBack ruta="/" />
          </header>
          <div className={styles.containerCart}>
            <div className={styles.cart}>
              {cart.map((prod) => {
                const URL_ITEM = `/products/${prod.id}`;
                return (
                  <div key={prod.id} className={styles.cartItem}>
                    <Link
                      to={URL_ITEM}
                      key={prod.id}
                      className={styles.linkCart}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 200 }}
                        image={prod.image}
                        alt="imagen cart detail"
                      />
                      <div className={styles.info}>
                        <h2>{prod.title}</h2>
                        <p>Cant: {prod.cantidad}</p>
                        <p>Precio unitario: {prod.price}</p>
                        <p>Subtotal: {Intl.NumberFormat("en-US").format(prod.cantidad * prod.price)}</p>
                      </div>
                    </Link>
                    <button
                      className={styles.btnRemove}
                      onClick={() => {
                        removeItem(prod.id);
                      }}
                    >
                      <DeleteIcon fontSize="large" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.cartDetail}>
                <p>Ingrese código de cupón si tiene uno: </p>
                <input className={styles.input} type="text"></input>
                <button className={styles.clearCart}>Aplicar cupón</button>
              </div>
              <div className={styles.cartDetail}>
                <div className={styles.infoDetail}>
                  <p>Subtotal: </p>
                  <strong>${Intl.NumberFormat("en-US").format(total)}</strong>
                </div>
                <div className={styles.infoDetail}>
                  <p>Cant:</p>
                  <strong>{qty}</strong>
                </div>
                <div className={styles.infoDetail}>
                  <p>Descuentos:</p>
                  <strong>$0</strong>
                </div>
                <hr className={styles.myBox}></hr>
                <div className={styles.infoDetail}>
                  <h1>Total:</h1>
                  <strong>${Intl.NumberFormat("en-US").format(total)}</strong>
                </div>
                <button className={styles.clearCart}>
                  <Link to="/checkout">Finalizar la compra</Link>
                </button>
              </div>
            </div>
          </div>
          <section className={styles.header}>
            <hr className={styles.myBox}></hr>
            <div className={styles.flexBtn}>
              <button className={styles.coolBtn} onClick={() => clear()}>
                Vaciar carrito
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default CartView;
