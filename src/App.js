import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Cart from './componentes/Cart/Cart';
import CartProvider from './Context/CartContext';
import Navbar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/NavBar/Header/Header';

function App() {


  return (
   <CartProvider>
    <BrowserRouter>
    <Header/>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/> 
      <Route path='/contacto' element={<Contact />}/>     
      <Route path='/productos/:id' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>ERROR 404 -página no encontrada</h1>}/>
     </Routes> 
     <Footer />
    </BrowserRouter>
   </CartProvider>

   
    
  );
}

export default App;
