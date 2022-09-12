import './ItemProduct.scss'
import { Link } from 'react-router-dom';


const ItemProduct = ({data}) => {




const {titulo, image, precio, stock, id} = data


    
    return(
      
        <div className="lista-productos">
            <img src={`/assets/${image}`} alt="inagen producto" className="remera1"/>          
            <p>{titulo}</p>       
            <span>${precio}</span>
           <h3>stock: {stock}</h3>
           <Link to={`/productos/${id}`}><button>Ver detalle</button></Link> 
         
        </div>
           
    );
}

export default ItemProduct