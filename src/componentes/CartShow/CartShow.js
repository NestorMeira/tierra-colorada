import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import './CartShow.scss'

function CartShow ({data}) {
    const {removeRemera} =useContext(CartContext);

   const hRemov = () =>{
        removeRemera(data.id)
    }

    return(
        <>
        <div className='app'>
            <h1>{data.titulo}</h1>
            <img src={`/assets/${data.image}`} alt="imagen" />
            <h3>${data.precio}</h3>
            <h2>cantidad: {data.qty}</h2>
            <div>
                <button onClick={hRemov}>borrar</button>
            </div>
        </div>
        </>
    );
}
  
export default CartShow