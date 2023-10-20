import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

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
    // Crear un nuevo producto con la medida seleccionada
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
    <div className="contenedor-lista">
      <div className="lista-productos">
        <img src={`/assets/${image}`} alt="Imagen producto" className="remera1" />
        <div className="descripcion">
          <h5>cod.{id}</h5>
          <p>{titulo}</p>
          <div className="medida">
            <label>Medida: </label>
            <select value={selectedMedida} onChange={(e) => onMedidaChange(e.target.value)}>
              {medida.map((medidaOption) => (
                <option key={medidaOption.nombre} value={medidaOption.nombre}>
                  {medidaOption.nombre}
                </option>
              ))}
            </select>
          </div>

          <span>Precio: ${selectedPrecio}</span>

          <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
