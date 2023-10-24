import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartPro, setCartPro] = useState([]);
  const [totalPro, setTotalPro] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);

  const getRemeraId = (id, medida) => cartPro.find((e) => e.id === id && e.medida === medida) || null;

  const addRemera = (newRemera, qty) => {
    const remera = getRemeraId(newRemera.id, newRemera.medida,newRemera.categoria);

    if (!remera) {
      newRemera.qty = qty;
      setCartPro([...cartPro, newRemera]);
      setTotalPrecio((prevTotalPrecio) => prevTotalPrecio + qty * newRemera.precio);
    } else {
      if (remera.qty + qty <= remera.stock) {
        remera.qty += qty;
        setTotalPrecio((prevTotalPrecio) => prevTotalPrecio + qty * remera.precio);
        setTotalPro((prevTotalPro) => prevTotalPro + qty);
      } else {
        return false;
      }
    }

    return true;
  };

// En CartContext.js
const removeRemera = (id, medida) => {
  const updatedCart = cartPro.filter((remera) => remera.id !== id || remera.medida !== medida);
  setCartPro(updatedCart);
};


  const clear = () => {
    setCartPro([]);
    setTotalPro(0);
    setTotalPrecio(0);
  };

  const isInCart = (remera) => getRemeraId(remera.id, remera.medida) ? true : false;

  const calculateTotal = () => {
    let total = 0;
    let precioTotal = 0;

    cartPro.forEach((remera) => {
      total += remera.qty;
      precioTotal += remera.qty * remera.precio;
    });

    return {
      total,
      precioTotal,
    };
  };

  const { total, precioTotal } = calculateTotal();

  return (
    <CartContext.Provider
      value={{
        
        cartPro,
        totalCompra:  precioTotal,
        totalPro,
        totalPrecio,
        addRemera,
        removeRemera,
        clear,
        isInCart,
        getRemeraId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
