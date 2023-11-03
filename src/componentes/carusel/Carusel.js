import React from 'react'
import ProductCarousel from '../ProductCarousel/ProductCarusel';
import{
  bandeja,portaretrato,cajaDeTe,
  cajita,lapicero,portaCelu,
  cajonera,espejo,bastidores,
  portaLlave, portaRollo
} from '../DataCarusel'


const Carusel = () => {
  return (
    <div className='carusel'>
     <ProductCarousel products={bandeja} />
     <ProductCarousel products={portaretrato} />
     <ProductCarousel products={portaCelu} />
     <ProductCarousel products={cajaDeTe} />
      <ProductCarousel products={cajita} />
      <ProductCarousel products={lapicero} />
      <ProductCarousel products={portaRollo} />
      <ProductCarousel products={cajonera} />
      <ProductCarousel products={espejo} />
      <ProductCarousel products={portaLlave} />
      <ProductCarousel products={bastidores} />
    </div>
  )
}

export default Carusel