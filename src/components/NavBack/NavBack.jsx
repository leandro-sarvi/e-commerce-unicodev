import React from 'react'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "../NavBack/NavBack.module.css"
function NavBack({ruta}) {
  return (
    <div className={styles.NavBack}>
        <div className={styles.myBox}>
        <ArrowBackIcon fontSize='small'/>
     <Link to={ruta} >Volver</Link>
        </div>
    </div>
  )
}

export default NavBack