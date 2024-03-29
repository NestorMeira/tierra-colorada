import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Cart from './componentes/Cart/Cart';
import CartProvider from './Context/CartContext';
import Navbar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/NavBar/Header/Header';
import Nosotros from './componentes/Nosotros/Nosotros';



function App() {
  return (
   <CartProvider>
    <BrowserRouter>
    <Header/>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='*' element={<h1>ERROR 404 -página no encontrada</h1>}  title="Página no encontrada"/>
     </Routes> 
     <Footer />
    </BrowserRouter>
   </CartProvider>
  );
}

export default App;
