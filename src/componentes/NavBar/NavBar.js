import './NavBar.scss'
import { Link } from 'react-router-dom';


const NavBar = ()=>{


    return(
        <div className='navbar-1'>
           
           <header>
            <Link to="/"><li> <img src="/assets/logo.png" alt="logo-calmate" className="logo"/></li></Link>
            </header>
            <ul>
                <Link to="/"><li><button>inicio</button></li></Link>
                <Link to="/contacto"><li><button>contacto</button></li></Link>
                <Link to='/category/remeranegra'><li><button>remeras Negras</button></li></Link>
                <Link to='/category/remerablanca'><li><button>remeras Blancas</button></li></Link>
            </ul>
        </div>
    );
}


export default NavBar 
