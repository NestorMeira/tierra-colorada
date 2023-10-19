import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer> 
        <div className={`links ${clicked ? 'active' : ''}`}>
        <div className='redes'>
        <FacebookIcon className='icono-redes'/><InstagramIcon className='icono-redes'/>
        </div>
        <div className='nav-superior'>
        <Link to="/" className='linea'><li onClick={handleClick}>inicio</li></Link>
      
        <CartWidget/>
      </div>
      <Link to="/"> <img src="/assets/logo.png" alt="logo" className="logo"/></Link>
        
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
padding: .4rem;
display: flex;
align-items:center;
justify-content: space-between;
.redes{
 display:flex;
 justify-content:flex-end;
 align-items:center;
 height:40px;
 background: black;
 .icono-redes{
 color: rgba(250, 76, 52, 1);
 margin:1%;
 font-size:28px;
 }
}
 .logo{
  width: 70%;
  margin:0 0 10px 10px;
 }
 .nav-superior{
  display:flex;
  justify-content:flex-start;
  margin:20px 0 0 30px;
  li{
  color: rgba(250, 76, 52, 1);
  font-size:25px
  }
 }
 .linea{
  text-decoration:none;
 }
 ul{
  display:flex;
  justify-content:center;
  margin:10px 0 10px 5%;
  color:white;
 }
  li{
   button{
    background-color: rgba(250, 76, 52, 1);
    color: rgb(255, 255, 255);
    width:91px;
    height:30px;
    font-size:15px;
    border:none;
    border-radius:20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   } 
    margin-right: 1.7rem;
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
      color: rgba(250, 76, 52, 1);
      font-size: 20px;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      .nav-superior{
        display:flex;
        justify-content:flex-start;
        margin
        margin-bottom:-30px;
        margin-left:30px;
        li{
        color: rgba(250, 76, 52, 1);
        font-size:25px;
        text-shadow: 3px 3px 4px #0006;
        }
       }
      li{
        font-size: 1rem;
        color: rgb(255, 255, 255);
        display: inline;
      }
      display: block;
    }
  }
  @media(max-width: 425px){
    margin-right: 0.5rem;
  .links.active{
    width: 100%;
    height:50%;
    margin-left: auto;
    margin-right: auto;
    top: 12%;
    left: 0;
    right: 0;
    background-color: white;
  
    .logo{
      margin-top:40px;
    }
    li{
      font-size: 2rem;
      width: 80%;
      color: rgba(250, 76, 52, 1);
      margin-right: 0.5rem;
    }
    .nav-superior{
      display:flex;
      justify-content:flex-start;
      margin
      margin-bottom:-30px;
      margin-left:20px;
      li{
      color: rgba(250, 76, 52, 1);
      font-size:24px;
      text-shadow: 3px 3px 4px #0006;
      }
     }
  }
}  

.burguer{
  background-color: rgba(250, 76, 52, 1);
  border-radius:8px;
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