import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ItemCount.scss'


const ItemCount =(props)=>{


    
    const [contador, setContador] = useState(props.initial)

    const addContador = ()=>{
            if(contador < props.stock){
                setContador(contador +1)
            }
    }

    const removeContador = ()=>{
        if(contador > 1 ){
            setContador(contador -1)
        }
    }

const onClick = (e) => {
    console.log(e);
}


    

    return(
        <>
        <div className="count-produc">
                <button className='menos' onClick={removeContador}>-</button>
              <span>{contador}</span>
                <button onClick={addContador}>+</button>
                </div>
                <div className='agregar'>
                <button onClick={() => props.onAdd(contador)} >+<ShoppingCartIcon /></button>
                </div>
            </>
    );
}

export default ItemCount