import { CartContext } from '../../Context/CartContext'
import { useContext,useState } from 'react'
import './CartShow.scss'
import Modal from '../Modal/Modal'
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'

function CartShow ({data}) {
    const [showModal, setShowModal] = useState(false)
    const {removeRemera ,cartPro,totalPrecio} =useContext(CartContext);
    const [success, setSuccess] = useState()
   const hRemov = () =>{
        removeRemera(data.id)
    }

    const [order, setOrder] = useState({
        items: cartPro.map((product) => {
            return {
                id: product.id,
                titulo: product.titulo,
                precio: product.precio
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrecio
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })

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



    return(
        <>
        <div className='app'>
            <h1>{data.titulo}</h1>
            <img src={`/assets/${data.image}`} alt="imagen" />
            <h3>${data.precio}</h3>
            <h2>cantidad: {data.qty}</h2>
            <div>
                <button onClick={hRemov}>borrar</button>
            </div>
            <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
            { showModal &&
            <Modal title="datos de contacto" close={()=>setShowModal()}> 
            {success ? ( <>
            <h2>su orden se genero</h2>
            <p>ID de compra : {success}</p>
            </>):
              (
                <form onSubmit={submitData}>
                 <input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre'
                    onChange={handleChange}
                    value={formData.name}
                    />
                 <input 
                    type='number' 
                    name='phone'  
                    placeholder='Telefono'                   
                    value={formData.phone}
                    onChange={handleChange}
                    />
                 <input 
                    type='email' 
                    name='email'  
                    placeholder='Email'
                    value={formData.email}  
                    onChange={handleChange}
                    />
                    <button type='submit'>Enviar</button>
                </form>
                )}
            </Modal>
            }
        </div>
        </>
    );
}
  
export default CartShow