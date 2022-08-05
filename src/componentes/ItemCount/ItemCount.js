import { useState, useEffect } from 'react'


const ItemCount =()=>{

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
        <div className="count-produc">
                <button className='menos' onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
                
            </div>
    );
}

export default ItemCount