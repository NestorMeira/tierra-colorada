import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import Pagar from '../Pagar/Pagar';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import '../CartShow/CartShow.scss'



const Cart=()=>{

    const { cartPro, clear,totalCompra} = useContext(CartContext);
   
    const hCartI = ()=>{
        clear();
    }

    if(!cartPro.length) {
        return(
            <div className="noHayProductos">
                <h2>No hay productos en el carro</h2>
            </div>
        )
    }

    return(
        <div className="app">
        <CartItem cartPro={cartPro}></CartItem>
        <button onClick={hCartI} className="vaciar"> <RemoveShoppingCartOutlinedIcon className="vaciar-icono"/> Vaciar carrito</button>
        <p>Total de la compra :$ {totalCompra}</p>
        <Pagar/>
       
        </div>
    );
}

export default Cart;