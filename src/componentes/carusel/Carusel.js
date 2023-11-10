
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import ProductCarousel from '../ProductCarousel/ProductCarusel';
import './Carusel.scss'
import{
  bandeja,portaretrato,cajaDeTe,
  cajita,lapicero,portaCelu,
  cajonera,espejo,bastidores,
  portaLlave, portaRollo,navidad,
  navidad2,navidad3,navidad4
} from '../DataCarusel'


const Carusel = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className='carusel'>
     <ProductCarousel products={bandeja} />
     <button className='top' onClick={scrollToTop}><KeyboardDoubleArrowUpOutlinedIcon className='topIcon'/></button> 
     <ProductCarousel products={navidad} />
     <ProductCarousel products={navidad2} />
     <ProductCarousel products={navidad3} />
     <ProductCarousel products={navidad4} />
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