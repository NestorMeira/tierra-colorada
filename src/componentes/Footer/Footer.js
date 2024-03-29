import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import'./Footer.scss'


function Footer() {

    const sendWhatsAppMessage = () => {
        const numero = '+543751396402';
        const mensaje = `Hola`;
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(linkWhatsApp);
    };

  return (
    <footer className="footer">
      <div className="logo">
        <span className="logo-text">Artesanias Tierra Colorada</span>
        <span className="logo-text">Eldorado-Misiones</span>
      </div>
       <div className='redes'>
         <a
           href="https://www.instagram.com/artesania_tierracolorada/"
           target="_blank"
           rel="noopener noreferrer" 
           aria-label="Visitar nuestro perfil en Instagram"
         >  
         <InstagramIcon className="icono-redes" /></a>
         <WhatsAppIcon className='icono-redes' onClick={sendWhatsAppMessage} />
         
         
         <a href='https://www.facebook.com/profile.php?id=61552627533704&mibextid=ZbWKwL'><FacebookIcon className="icono-redes" /></a>
       </div>

       <div className="creator">
        Creado por:{' '}
        <a
          href="https://nestormeira.github.io/porfolio/"
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
            Nestor Meira
        </a>
      </div>

    </footer>
  );
}

export default Footer;
