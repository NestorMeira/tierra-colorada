import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="redes">
        <a
          href="https://www.instagram.com/artesania_tierracolorada/"
          target="_blank"
          rel="noopener noreferrer" // Agregamos el atributo rel para seguridad
          aria-label="Visitar nuestro perfil en Instagram"
        > <InstagramIcon className="icono-redes" />
        </a>
      </div>
      <img src="/assets/logo.png" alt="Logo de Artesanías Tierra Colorada" />
    </header>
  );
};

export default Header;
