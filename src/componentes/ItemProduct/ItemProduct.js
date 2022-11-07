import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount';
import { useState,useContext } from "react"
import { CartContext } from '../../Context/CartContext'



const ItemProduct = ({data}) => {

const {titulo, image, precio, stock, id} = data
const { addRemera } =useContext(CartContext)
 const [cart, setCart] = useState ({});

 const onAdd = (contador) =>{
    setCart(data)
    addRemera(data, contador)
 }

    return(
      <div className='contenedor-lista'>
        <div className="lista-productos">
            <img src={`/assets/${image}`} alt="inagen producto" className="remera1"/>
            <div className='descripcion'>         
            <p>{titulo}</p>
            <div className='talle'>
            <h3>Talles</h3>  
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            </div>
            <span>${precio}</span>
            <ItemCount  stock={data.stock}  initial={1} onAdd={onAdd}/>
           </div> 
        </div>
        </div>
    );
}

export default ItemProduct