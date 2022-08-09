import "./ItemDetail.scss"


const ItemDetail= ({data})=>{

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
    <button>AÑADIR AL CARRITO</button>
    </div>
    </>
)
}

export default ItemDetail