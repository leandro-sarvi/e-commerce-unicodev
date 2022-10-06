import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import Dropdown from "./components/Navbar/Dropdown";

function App() {
  const greeting ="Las mejores ofertas";
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown open={open} />
      <Banner />
      <ItemListContainer greeting={greeting}/>
    </>
  );
}

export default App;
