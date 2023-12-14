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
        <div className='inicio'>
        <h3>● Compra mínima $10.000 .</h3>
        <h3>● Envíos a todo Misiones.</h3>
        <h3>● Pagos por: transferencia,<br/> contrareembolso o mercadopago.</h3>
        <h3>● Envíos con Neo o Más.</h3>
        <button className='wpp' onClick={sendWhatsAppMessage}>WhatsApp   <WhatsAppIcon className='icom-wpp'/></button>
        </div>
         </div>
         <CarouselInicio/>
        <Carusel/>
        <Consultar/>
       
        </div>
    );
}


export default Home 