import CarouselInicio from "../componentes/CarouselInicio/CarouselInicio";
import Consultar from "../componentes/Consultar/Consultar";
import Carusel from "../componentes/carusel/Carusel";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Home.scss'

const Home = ()=>{

    const sendWhatsAppMessage = () => {
        const numero = '+543751396402';
        const mensaje = `Hola`;
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(linkWhatsApp);
    };
    


    return(
       <div className="home">
        <div className="App">
        <div className="compra">
             <img src="assets/compra.jpg" alt="imagen" />
          </div>
           <h2>Consultar precios por whatsapp</h2>
            <button className='wpp' onClick={sendWhatsAppMessage}>WhatsApp   <WhatsAppIcon className='icom-wpp'/></button>

         </div>
         
         <CarouselInicio/>
        <Carusel/>
        <Consultar/>
       
        </div>
    );
}


export default Home 