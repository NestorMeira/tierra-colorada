import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Home = ()=>{

    const sendWhatsAppMessage = () => {
        const numero = '+543751606367';
        const mensaje = `Hola`;
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(linkWhatsApp);
    };
    


    return(
        
        <div className="App">
        <div className='inicio'>
        <h3>● La compra miníma es de $10.000</h3>
        <h3>● Hacemos envíos a toda la provincia de Misiones</h3>
        <h3>● Pagos por transferencia, contrareembolso o mercadopago<br/> 
        ● Envíos con Neo o Más</h3>

        <button className='wpp' onClick={sendWhatsAppMessage}>WhatsApp   <WhatsAppIcon className='icom-wpp'/></button>
      
        </div>
        <div className="lista-productos">
    
        <ItemListContainer />
        
         </div>
         </div>

     
    );
}


export default Home 