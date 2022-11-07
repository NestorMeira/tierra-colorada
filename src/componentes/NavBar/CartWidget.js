import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '../../Context/CartContext';
import { useContext,useState } from 'react';
import Modal from '../Modal/Modal'
import Cart from '../Cart/Cart';




const CartWidget = ()=>{
    const [showModal, setShowModal] = useState(false)
    const {cartPro} =useContext(CartContext);
    const cantidad= cartPro.length
    return(
        <div className='icono-carrito'>
         <button onClick={() =>setShowModal(true)}>
         {cantidad}<ShoppingCartOutlinedIcon className='carrito'/>
         </button>
         { showModal &&
            <Modal close={()=>setShowModal()}>
            <div className='producto-en-carro'>
            <ShoppingCartOutlinedIcon className='carrito'/>
            <h3>Carrito</h3>
            </div>
            <Cart/>   
            </Modal>}
        </div>
    )
}

export default  CartWidget