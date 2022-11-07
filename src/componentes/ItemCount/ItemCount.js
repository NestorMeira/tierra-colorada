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

const onClick = (e) => {
    console.log(e);
}


    

return(
    <>
        <div className="count-produc">
            <h3>Cantidad</h3>
            <button onClick={removeContador}>-</button>
            <span>{contador}</span>
            <button onClick={addContador}>+</button>  
            </div>
            <div className='agregar'>
            <button onClick={() =>{
                Swal.fire({
                    title: 'Tu producto fue agregado al carrito',
                    imageUrl: '/assets/logo.png',
                    imageWidth: 200,
                    imageHeight: 100,
                    imageAlt: 'Custom image',      
                 }) 
                 props.onAdd(contador)}}>Agregar al carrito</button>
            </div>
    </>
);
}

export default ItemCount