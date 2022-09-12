import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const CartWidget = ()=>{
    return(
        <div className='icono-carrito'>
         <Link to='/cart'><button><ShoppingCartIcon /></button></Link>
        </div>
    )
}

export default  CartWidget