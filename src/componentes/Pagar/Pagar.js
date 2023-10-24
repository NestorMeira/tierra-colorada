import Modal from '../Modal/Modal'
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'
import { useState,useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const Pagar = () => {
 
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const {cartPro,totalCompra} =useContext(CartContext);



    const handleChange = (e) => {
        console.log("valor general. ",e.target.name)
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

    const [order, setOrder] = useState({
        items: cartPro.map((product) => {
            return {
                codigo: product.id,
                medida:product.medida,
                titulo: product.titulo,
                precio: product.precio,
                cantidad: product.qty
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCompra
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    })

    const sendWhatsAppMessage = () => {
        const numero = '+543751606367';
        const mensaje = `Hola, he realizado un pedido. Mi código de seguimiento es: ${success}`;
    
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    
     
        
        window.open(linkWhatsApp);
    };
    

    return (
        <div className="pagar-todo">
            <button onClick={() => setShowModal(true)} className="pagar">
                Comprar
            </button>
            {showModal && (
                <Modal title="datos de contacto" close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2>Sus datos se cargaron exitosamente.</h2>
                           <h3><ArrowDownwardIcon className='flecha'/>Para finalizar confirme su compra al whatsapp <ArrowDownwardIcon className='flecha'/></h3>
                           
                            <button className='wpp' onClick={sendWhatsAppMessage}> <WhatsAppIcon className='icom-wpp'/> Confirmar </button>
                        </>
                    ) : (
                        <form onSubmit={submitData}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre y Apellido"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Teléfono"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Pagar;
