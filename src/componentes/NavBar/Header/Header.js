import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';

import './Header.scss'

const Header = () => {
  return (
    <header>
         <div className='redes'>
       <a href='https://www.instagram.com/artesania_tierracolorada/'target="_blank">Seguinos en Instagram <InstagramIcon className='icono-redes'/></a>
        </div>
        <img src="/assets/logo.png" alt="logo"/>

    </header>
  )
}

export default Header