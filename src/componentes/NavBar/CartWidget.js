import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';

const CartWidget=()=>{

    const {totalPro,cartPro} = useContext(CartContext)

    return(
        <div className='cart-widget' >
            <p>{cartPro}</p>
            <ShoppingCartIcon />
        </div>
    )
}

export default CartWidget