import './NavBar.scss'

const NavBar = ()=>{
    return(
        <div className='navbar-1'>
            <header>
            <img src="/assets/logo.png" alt="logo-calmate" className="logo"/>
            </header>
          
            <ul>
                <li><button>inicio</button></li>
                <li><button>productos</button></li>
                <li><button>contacto</button></li>
                <li></li>
            </ul>
          
        </div>
    );
}


export default NavBar 
