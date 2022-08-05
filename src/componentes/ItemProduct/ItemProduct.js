import { useState, useEffect } from 'react'
import './ItemProduct.scss'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';



const ItemProduct = ({titulo, precio,image,stock}) => {
  


    
    return(
        <Link to={`/productos/ ${titulo}`}>
        <div className="lista-productos">
            <img src={`/assets/${image}`} alt="inagen producto" className="remera1"/>
            
            <p>{titulo}</p>
            <span>{precio}</span>
           <ItemCount />
            <button>Comprar</button>
            <h3>stock: {stock}</h3>
        </div>
        </Link>
    );
}

export default ItemProduct