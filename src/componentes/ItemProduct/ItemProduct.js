import { useState, useEffect } from 'react'
import './ItemProduct.scss'

const ItemProduct = ({titulo, precio,image,stock}) => {
    const [contador, setContador] = useState(1)

    const addNumber = ()=>{
        
        setContador(contador +1)
            
        
    }

    const removeNumber = ()=>{
        setContador(contador -1)
    }

    useEffect( ()=>{
        console.log("Actualizado")
        
    },[contador] ) 
    
    return(
        <div className="lista-productos">
            <img src={`/assets/${image}`} alt="inagen producto" className="remera1"/>
            <p>{titulo}</p>
            <span>{precio}</span>
            <div className="count-produc">
                <button className='menos' onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
                
            </div>
            <button>Comprar</button>
            <h3>stock: {stock}</h3>
        </div>
    );
}

export default ItemProduct