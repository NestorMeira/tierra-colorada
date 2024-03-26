
import { Link,useNavigate} from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.scss';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate(); 
 
  const [selectedCategory, setSelectedCategory] = useState('/');

  
  const handleCategoryChange = (event) => {
    scrollToTop();
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(newCategory);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  const inicioo = () => {
    scrollToTop();
    setSelectedCategory('/');
  };


  return (
    <nav className='nav-superior'>
      <Link to="/" className='linea'>
        <button className='inicio' onClick={inicioo}><b>INICIO</b></button>
        </Link>
      <div className="categorias">

          <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
            <option disabled  value="/"><b>PRODUCTOS</b></option>
            <option value="/categoria/cajitas">Cajitas</option>
            <option value="/categoria/caja_con_tapa">Cajas con tapa</option>
            <option value="/categoria/portaretrato">Portaretratos</option>
            <option value="/categoria/soporte">Soporte</option>
            <option value="/categoria/navidad">Navidad</option>
            <option value="/categoria/porta_celular">Porta celular</option>
            <option value="/categoria/porta_vino">Porta vino</option>
            <option value="/categoria/letras">Letras</option>
            <option value="/categoria/casita">Casitas</option>
            <option value="/categoria/bandeja">Bandejas</option>
            <option value="/categoria/caja_de_te">Cajas de Té</option>
            <option value="/categoria/lapicero">Lapiceros</option>
            <option value="/categoria/servilletero">Servilleteros</option>
            <option value="/categoria/posa_torta">Posa torta</option>
            <option value="/categoria/porta_rollo">Porta rollo</option>
            <option value="/categoria/porta_aderezo">Porta aderezo</option>
            <option value="/categoria/cajonera">Cajoneras</option>
            <option value="/categoria/espejo">Espejos</option>
            <option value="/categoria/plantera">Planteras</option>
            <option value="/categoria/torre">Torre Eiffel</option>
            <option value="/categoria/fanales">Fanales</option>
            <option value="/categoria/porta_llave">Porta Llaves</option>
            <option value="/categoria/bastidores">Bastidores</option>
            <option value="/categoria/placas3mm">Placas 3mm</option>
            <option value="/categoria/placas9mm">Placas 9mm</option>
            <option value="/categoria/circulo_melamina">Círculo melamina</option>
            <option value="/categoria/circulo_mdf">Círculo mdf</option>
            <option value="/categoria/mates">mates</option>
          </select>
      </div>
      <Link to="/nosotros" className='linea'>
        <button className='btn-nosotros'><b>NOSOTROS</b></button>
        </Link>
      <CartWidget />
    </nav>
  );
}

export default Navbar;