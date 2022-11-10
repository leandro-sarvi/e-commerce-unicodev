import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Navbar/Dropdown";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartView from "./components/CartView/CartView";
import Footer from "./components/footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar toggle={toggle} />
          <Dropdown open={open} toggle={toggle} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              path="/products/:id"
              element={<ItemDetailContainer greeting={"Detalles"} />}
            />
            <Route path="/cart" element={<CartView greeting={"cart"} />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
