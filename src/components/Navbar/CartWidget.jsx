import React from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Navbar.module.css'
function CartWidget() {
  return (
    <>
    <IconButton>
        <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon className={style.CartWidget}/>
        </Badge>
        </IconButton>
    </>
  )
}

export default CartWidget