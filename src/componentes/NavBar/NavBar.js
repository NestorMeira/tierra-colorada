import './NavBar.scss'
import { Link } from 'react-router-dom';


const NavBar = ()=>{
    return(
        <div className='navbar-1'>
            <header>
            <img src="/assets/logo.png" alt="logo-calmate" className="logo"/>
            </header>
          
            <ul>
                <Link to="/"><li><button>inicio</button></li></Link>
                <Link to="/productos"><li><button>productos</button></li></Link>
                <Link to="/contacto"><li><button>contacto</button></li></Link>
                <li></li>
            </ul>
          
        </div>
    );
}


export default NavBar 
