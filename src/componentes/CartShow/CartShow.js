import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import './CartShow.scss'


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




function CartShow ({data}) {
 
    const {removeRemera,} =useContext(CartContext);
       
   
   const hRemov = () =>{
        removeRemera(data.id)
    }




    return(
        <>
        <div className='app'>
            <img src={`/assets/${data.image}`} alt="imagen" />
            <h1>{data.titulo}</h1>
            <h2>cantidad: {data.qty }</h2>
            <h3>${data.precio}</h3>
        
            <button onClick={hRemov}><DeleteOutlineIcon className='delete'/></button>
        </div>
        </>
    );
}
  
export default CartShow