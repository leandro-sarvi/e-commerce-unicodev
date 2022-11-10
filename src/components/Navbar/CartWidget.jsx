import React,{useContext} from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Navbar.module.css'
import {CartContext} from "../../context/CartContext"
function CartWidget() {
  const {qty} = useContext(CartContext);
  return (
    <>
    <IconButton>
        <Badge badgeContent={qty} color="primary">
        <ShoppingCartIcon className={style.CartWidget}/>
        </Badge>
        </IconButton>
    </>
  )
}

export default CartWidget