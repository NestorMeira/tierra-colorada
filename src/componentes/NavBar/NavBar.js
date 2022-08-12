import './NavBar.scss'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const NavBar = ()=>{
    return(
        <div className='navbar-1'>
           
           <header>
            <Link to="/"><li> <img src="/assets/logo.png" alt="logo-calmate" className="logo"/></li></Link>
            </header>
            <ul>
                <Link to="/"><li><button>inicio</button></li></Link>
                <Link to="/productos"><li><button>productos</button></li></Link>
                <Link to="/contacto"><li><button>contacto</button></li></Link>
            </ul>
            <CartWidget  />
        </div>
    );
}


export default NavBar 
