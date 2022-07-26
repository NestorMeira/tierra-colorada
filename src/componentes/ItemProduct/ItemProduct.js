

const ItemProduct = ({titulo, precio,image}) => {
    return(
        <div className="lista-productos">
            <img src={`/assets/${image}`} alt="inagen producto" className="remera1"/>
            <p>{titulo}</p>
            <span>{precio}</span>
            <button>Comprar</button>
        </div>
    );
}

export default ItemProduct