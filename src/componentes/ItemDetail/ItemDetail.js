import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"



const ItemDetail= ({data})=>{

    const [contadorSelecte, setContadorSelected] = useState(0)

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
    <h2>{data.tiulo}</h2>
    <p className="detail-info-precio">$ {data.precio}</p>
    <span>Talles</span>
    <div className="detail-info-talle">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
    </div>
    {console.log("contador: ", contadorSelecte)}
    {
    contadorSelecte > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount contadorSelected ={ setContadorSelected}/>
    }
    
   
    </div>
    </>
)
}

export default ItemDetail