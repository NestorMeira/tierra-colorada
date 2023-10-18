import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children,data})=>{
 
const[cartPro, setCartPro] = useState([]);
const[totalPro, setTotalPro] = useState(0);
const [totalPrecio, setTotalPecio] =useState(0)

const getRemeraId = (id) => cartPro.find(e => e.id ===id)|| null;

const addRemera = (newRemera, qty) =>{
    const remera = getRemeraId(newRemera.id);
    if(!remera){
        newRemera.qty = qty;
        setCartPro([...cartPro, newRemera]);
        const total= totalPrecio + remera.qty * remera.precio;
        setTotalPecio(total)
        

    }else{
        if(remera.qty + qty > remera.stock)
        return false;
        remera.qty += qty
    }
    setTotalPro(totalPro + qty)

    return true;
   
} 


const calculateTotal = () => {
    let total = 0;

    cartPro.forEach((remera) => {
      total += remera.precio * remera.qty;
    });

    return total;
  };
const totalCompra=calculateTotal() + totalPrecio

const removeRemera = (id)=>{
    const result = cartPro.filter(el => el.id != parseInt (id));
    setCartPro(result)
   
}

const clear = ()=> {
    setCartPro([]);
    setTotalPro(0);
    setTotalPecio(0);
}


const isInCart = (remera) => getRemeraId (remera.id)? true : false



    return(
        <CartContext.Provider value={{
            cartPro,
            totalCompra,
            totalPro,
            totalPrecio,
            addRemera,
            removeRemera,
            clear, 
            isInCart,
            getRemeraId}}>
            {children}
        </CartContext.Provider>
    )
    }


export {CartContext}
export default CartProvider