import { useState } from 'react'
import './ItemCount.scss'
import Swal from 'sweetalert2'


const ItemCount =(props)=>{


    
const [contador, setContador] = useState(props.initial)

const addContador = ()=>{
 if(contador < props.stock){
 setContador(contador +1)
 }}

const removeContador = ()=>{
    if(contador > 1 ){
        setContador(contador -1)
    }
}




    

return(
    <>
        <div className="count-produc">
            <h3>Cantidad</h3>
            <button className='cantidad' onClick={removeContador}>-</button>
            <span>{contador}</span>
            <button className='cantidad'onClick={addContador}>+</button>  
            </div>
            <div className='agregar'>
            <button onClick={() =>{
                
                Swal.fire({
                    
                    title: 'Tu producto fue agregado al carrito',
                    icon:'success',
                  
                  
                   
                 }) 
                 props.onAdd(contador)}}>Agregar al carrito</button>
            </div>
    </>
);
}

export default ItemCount