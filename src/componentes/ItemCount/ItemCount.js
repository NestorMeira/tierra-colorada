import { useState, useEffect } from 'react'
import './ItemCount.scss'

const ItemCount =({contadorSelected})=>{

    const [contador, setContador] = useState(1)

    const addContador = ()=>{
            setContador(contador +1)
    }

    const removeContador = ()=>{
        setContador(contador -1)
    }


    const onAdd =()=>{
        contadorSelected(contador)
    }

  


    

    return(
        <>
        <div className="count-produc">
                <button className='menos' onClick={removeContador}>-</button>
              <span>{contador}</span>
                <button onClick={addContador}>+</button>
                </div>
                <div className='agregar'>
                <button  onClick={onAdd} >AGREGAR AL CARRITO</button>
                </div>
                </>
    );
}

export default ItemCount