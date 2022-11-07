import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import './CartShow.scss'


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




function CartShow ({data}) {
 
    const {removeRemera, totalPro, totalPrecio} =useContext(CartContext);
       
   
   const hRemov = () =>{
        removeRemera(data.id)
    }


   const total =data.precio * data.qty

    return(
        <>
        <div className='app'>
            <img src={`/assets/${data.image}`} alt="imagen" />
            <h1>{data.titulo}</h1>
            <h2>cantidad: {data.qty }</h2>
            <h3>${data.precio}</h3>
            <h4>total: {total}</h4>
            <button onClick={hRemov}><DeleteOutlineIcon className='delete'/></button>
        </div>
        </>
    );
}
  
export default CartShow