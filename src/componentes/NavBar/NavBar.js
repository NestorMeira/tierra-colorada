
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.scss';
import { useNavigate } from 'react-router-dom'; // Cambio aquí

const Navbar = () => {
  const navigate = useNavigate(); // Cambio aquí

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(selectedCategory); // Cambio aquí
  };

  return (
    <div className='nav-superior'>
      <Link to="/" className='linea'><button className='inicio'>Inicio</button></Link>
      <div className="categorias">

          <select className='linea' onChange={handleCategoryChange}>
            <option className='option' value="/">Productos</option>
            <option value="/categoria/cajita">Cajitas</option>
            <option value="/categoria/portaretrato">Portaretratos</option>
            <option value="/categoria/bandeja">Bandejas</option>
            <option value="/categoria/caja_de_te">Cajas de Té</option>
            <option value="/categoria/lapicero">Lapiceros</option>
            <option value="/categoria/servilletero">Servilleteros</option>
            <option value="/categoria/porta_rollo">Porta rollo</option>
            <option value="/categoria/cajonera">Cajoneras</option>
            <option value="/categoria/espejo">Espejos</option>
            <option value="/categoria/plantera">Planteras</option>
            <option value="/categoria/porta_llave">Porta Llaves</option>
            <option value="/categoria/bastidores">Bastidores</option>
            <option value="/categoria/placas3mm">Placas 3mm</option>
            <option value="/categoria/placas9mm">Placas 9mm</option>
            
          </select>
      </div>
      <CartWidget />
    </div>
  );
}

export default Navbar;