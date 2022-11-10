import React, { useState, useEffect, createContext } from "react";
export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const index = cart.findIndex((prod) => prod.id === item.id);
      const qtyFiltrado = cart[index].cantidad;
      cart.splice(index, 1);
      setCart([...cart, { ...item, cantidad: cantidad + qtyFiltrado }]);
    } else {
      setCart([...cart, { ...item, cantidad: cantidad }]);
    }
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => cart.some((item) => item.id === id);
  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };
  useEffect(() => {
    const cantidad = cart.reduce(
      (acum, prod) => (acum = acum + prod.cantidad),
      0
    );
    const total = cart.reduce(
      (acum, prod) => (acum = acum + prod.price * prod.cantidad),
      0
    );
    setQty(cantidad);
    setTotal(total);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        qty,
        total,
        addItem,
        removeItem,
        isInCart,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
