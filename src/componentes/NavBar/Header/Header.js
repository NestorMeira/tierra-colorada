import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Header.scss'

const Header = () => {
  return (
    <header>
         <div className='redes'>
        <FacebookIcon className='icono-redes'/><InstagramIcon className='icono-redes'/>
        </div>
        <img src="/assets/logo.png" alt="logo"/>

    </header>
  )
}

export default Header