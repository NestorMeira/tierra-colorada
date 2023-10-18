import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import Pagar from '../Pagar/Pagar';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';




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
         <h3>Total de la compra : {totalCompra}</h3>
        <button onClick={hCartI} className="vaciar"> <RemoveShoppingCartOutlinedIcon className="vaciar-icono"/> Vaciar carrito</button>
        <Pagar/>
       
        </div>
    );
}

export default Cart;