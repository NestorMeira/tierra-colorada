import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
      <Link to="/"> <img src="/assets/logo.png" alt="logo-calmate" className="logo"/></Link>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <ul>
    <Link to="/" className='linea'><li onClick={handleClick}>inicio</li></Link>
    <Link to="/contacto" className='linea'><li onClick={handleClick}>contacto</li></Link>
    <Link to='/category/remeranegra' className='linea'><li onClick={handleClick}>remeras negras</li></Link>
    <Link to='/category/remerablanca' className='linea'><li onClick={handleClick}>remeras blancas</li></Link>
    <Link to='/category/remeradamas' className='linea'><li onClick={handleClick}>para damas</li></Link>
       </ul>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      <CartWidget/>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
 img{
  width: 95px;
  border-radius:100px;
  margin-left:30px;
 }
 .linea{
  text-decoration:none;
 }

  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    li{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      li{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  @media(max-width: 425px){
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
    li{
      background-color: #222;
      font-size: 2rem;
      width: 80%%;
      color: white;
    }
  }
}  
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{

    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
  }
`