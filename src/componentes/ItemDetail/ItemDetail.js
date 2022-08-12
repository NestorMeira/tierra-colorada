import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../Context/CartContext'

const ItemDetail= ({data})=>{

 const { addRmera } =useContext(CartContext)
 const [cart, setCart] = useState ({});

 const onAdd = (contador) =>{
    setCart(data)
    addRmera(data, contador)
 }

console.log(cart, 'uuu')


    return(
    <>
    <div className="item-detail-image">
    <img src={`/assets/${data.image}`} alt="imagen" />
    </div>
    <div  className="reme2">
    <img src="/assets/remera1.png" alt="imagen"/>
    </div >
    <div  className="reme3">
    <img src="/assets/remera1.png" alt="imagen"/>
    </div >
    
    
    <div className="item-detail-info">
    <span className="category"> {data.category}</span>
    <h2>{data.titulo}</h2>
    <p className="detail-info-precio">$ {data.precio}</p>
    <span>Talles</span>
    <div className="detail-info-talle">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        
    </div>
    {
     cart.id? <button><Link to="/cart">TERMINAR COMPRA</Link></button>
     : <ItemCount  stock={data.stock}  initial={1} onAdd={onAdd}/>
    }
    </div>
    </>
)
}

export default ItemDetail