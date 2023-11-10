import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

import './ItemProduct.scss'

const ItemProduct = ({ data }) => {
  const { titulo, image, precio, id, medida } = data;
  const { addRemera } = useContext(CartContext);
  const [selectedMedida, setSelectedMedida] = useState(medida[0].nombre);
  const [selectedPrecio, setSelectedPrecio] = useState(medida[0].precio);

  const onMedidaChange = (newMedida) => {
    const selectedMedidaData = medida.find((item) => item.nombre === newMedida);
    setSelectedMedida(newMedida);
    setSelectedPrecio(selectedMedidaData.precio);
  
  };

  const onAdd = (contador) => {

      const itemToAdd = {
        id,
        titulo,
        image,
        medida: selectedMedida,
        precio: selectedPrecio,
        stock: data.stock,
      };
      addRemera(itemToAdd, contador);
    
  };

  return (
    <article className="contenedor-lista">
      <div className="lista-productos">
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <div className="descripcion">
          <p>cod.{id}</p>
          <h2>{titulo}</h2>
          <div className="medida">
           
            <select value={selectedMedida} onChange={(e) => onMedidaChange(e.target.value)}>
              {medida.map((medidaOption) => (
                <option key={medidaOption.nombre} value={medidaOption.nombre}>
                  {medidaOption.nombre} 

                </option>
              ))}
            </select><ArrowDropDownSharpIcon className='flechita'/>
          </div>
         
          <span>Precio: ${selectedPrecio}</span>
          
          <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </article>
  );
};

export default ItemProduct;
