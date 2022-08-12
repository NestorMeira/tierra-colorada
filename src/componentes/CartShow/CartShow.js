import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'


function CartShow ({data}) {
    const {removeRemera} =useContext(CartContext);

   const hRemov = () =>{
        removeRemera(data.id)
    }

    return(
        <div className='App'>
            <h1>{data.titulo}</h1>
            <img src={data.img} alt='imagen'></img>
            <h3>{data.precio}</h3>
            <h2>{data.qty}</h2>
            <div>
                <button onClick={hRemov}>x</button>
            </div>
        </div>
    );
}
  
export default CartShow