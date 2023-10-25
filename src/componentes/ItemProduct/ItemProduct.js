import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';

import './ItemProduct.scss'


const ItemProduct = ({ data }) => {
  const { titulo, image, precio, id, medida } = data;
  const { addRemera } = useContext(CartContext);

  const [selectedMedida, setSelectedMedida] = useState(medida[0].nombre);
  const [selectedPrecio, setSelectedPrecio] = useState(medida[0].precio);
  const [showPrice, setShowPrice] = useState(false);
  const onMedidaChange = (newMedida) => {
    const selectedMedidaData = medida.find((item) => item.nombre === newMedida);
    setSelectedMedida(newMedida);
    setSelectedPrecio(selectedMedidaData.precio);
    setShowPrice(true);
  };

  const onAdd = (contador) => {
    if (selectedMedida === medida[0].nombre) {
     
      Swal.fire({
        title: 'Selecciona una medida',
        icon: 'error',
      });
    } else {
      const itemToAdd = {
        id,
        titulo,
        image,
        medida: selectedMedida,
        precio: selectedPrecio,
        stock: data.stock,
      };
      addRemera(itemToAdd, contador);
    }
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
            </select>
          </div>

          {showPrice && <span>Precio: ${selectedPrecio}</span>}

          <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </article>
  );
};

export default ItemProduct;
