import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './Consultar.scss';

const Consultar = () => {
  const productos = [
    {
      id: 1000,
      categoria: 'letras',
      medida: [
        { nombre: '1,7 cm', precio: 25 },
        { nombre: '2,5 cm', precio: 38 },
        { nombre: '5 cm', precio: 50 },
        { nombre: '6 cm', precio: 65 },
        { nombre: '10 cm', precio: 190 },
        { nombre: '15 cm', precio: 250 },
        { nombre: '20 cm', precio: 380 },
        { nombre: '24 cm', precio: 480 },
      ],
      image: '57.png',
      stock: 99,
      titulo: 'Letras',
    },
    {
      id: 1001,
      categoria: 'souvenirs',
      medida: [
        { nombre: '7cm de alto', precio: 150 },
      ],
      image: '141.png',
      stock: 99,
      titulo: 'Souvenirs',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productos[0]);
  const [selectedMedida, setSelectedMedida] = useState(productos[0].medida[0]);

  const sendWhatsAppMessage = () => {
    const numero = '+543751396402';
    const mensaje = `Hola, estoy interesado en el producto con Codigo ${selectedProduct.id} - Medida: ${selectedMedida.nombre}`;
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(linkWhatsApp);
  };

  return (
    <div className="consultar">
      {productos.map((producto) => (
        <div key={producto.id} className="producto">
          <img src={`/assets/${producto.image}`} alt={`Imagen de ${producto.titulo}`} />
          <div className='descripcion'>
            <h2>{producto.titulo}</h2>
            <h4>Codigo : {producto.id}</h4>
            <div className="medidas">
              <select
                value={selectedMedida.nombre}
                onChange={(e) => {
                  const newMedida = producto.medida.find((m) => m.nombre === e.target.value);
                  setSelectedMedida(newMedida);
                }}
              >
                {producto.medida.map((medidaItem) => (
                  <option key={medidaItem.nombre} value={medidaItem.nombre}>
                    {medidaItem.nombre} ${medidaItem.precio}
                  </option>
                ))}
              </select>
            </div>
            <p>Consultas por whatsapp</p>
            <button className='wpp' onClick={() => sendWhatsAppMessage()}>WhatsApp  <WhatsAppIcon className='icom-wpp'/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consultar;
