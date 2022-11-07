import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../Context/CartContext'

const ItemDetail= ({data})=>{

 const { addRemera } =useContext(CartContext)
 const [cart, setCart] = useState ({});

 const onAdd = (contador) =>{
    setCart(data)
    addRemera(data, contador)
 }
    return(
    <>
    <div className="item-detail-image">
    <img src={`/assets/${data.image}`} alt="imagen" />
    </div>
    <div className="item-detail-info">
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
     cart.id?
     <div className="btn-terminar"><Link to="/cart"> <button>TERMINAR COMPRA</button></Link></div>
     : <ItemCount  stock={data.stock}  initial={1} onAdd={onAdd}/>
    }
    </div>
    </>
)
}

export default ItemDetail