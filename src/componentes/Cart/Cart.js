import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';


function Cart(){

    const { cartPro, clear } = useContext(CartContext);

    const hCartI = ()=>{
        clear();
    }

    if(!cartPro.length) {
        return(
            <div>
                <h2>No hay productos en el carro</h2>
            </div>
        )
    }

    return(
        <div className="app">
        <CartItem cartPro={cartPro}></CartItem>
        <button onClick={hCartI}> VACIAR CARRITO</button>
        </div>
    );
}

export default Cart;