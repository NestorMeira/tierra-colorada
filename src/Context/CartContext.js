import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children})=>{
  
const[cartPro, setCartPro] = useState([]);
const[totalPro, setTotalPro] = useState(0);

const getRemeraId = (id) => cartPro.find(e => e.id ===id)|| null;

const addRemera = (newRemera, qty) =>{
    const remera = getRemeraId(newRemera.id);
    if(!remera){
        newRemera.qty = qty;
        setCartPro([...cartPro, newRemera]);
    }else{
        if(remera.qty + qty > remera.stock)
        return false;
        remera.qty += qty
    }
    setTotalPro(totalPro + qty);
    return true;
}
console.log(cartPro, totalPro, "context");

const removeRemera = (id)=>{
    const result = cartPro.filter(el => el.id !== parseInt (id));
    setCartPro(result)
    console.log( result , 'queee')
}

const clear = ()=> {
    setCartPro([]);
    setTotalPro(0);
}


const isInCart = (remera) => getRemeraId (remera.id)? true : false



    return(
        <CartContext.Provider value={{cartPro, totalPro, addRemera, removeRemera, clear, isInCart, getRemeraId}}>
            {children}
        </CartContext.Provider>
    )
    }


export {CartContext}
export default CartProvider