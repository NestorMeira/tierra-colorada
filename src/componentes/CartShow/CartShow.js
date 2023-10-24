import React, { useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartContext } from '../../Context/CartContext';
import './CartShow.scss'
function CartShow({ data }) {
  const { addRemera, removeRemera, isInCart } = useContext(CartContext);

  const hAddToCart = () => {
    if (!isInCart(data)) {
      addRemera(data, 1);
    }
  };

// En CartShow.js
const hRemoveFromCart = () => {
  removeRemera(data.id, data.medida);
};

  return (
    <div className='contenedor'>
      <img src={`/assets/${data.image}`} alt='imagen' />
      <div className='hijo'>
        
        <h2>{data.titulo}</h2>
        <h>cantidad: {data.qty}</h><br />
        <h3>Medida : {data.medida}</h3><br />
        <h3>${data.precio}</h3>
        <button onClick={hRemoveFromCart}><DeleteOutlineIcon className='delete' /></button>
       
      </div>
    </div>
  );
}

export default CartShow;
