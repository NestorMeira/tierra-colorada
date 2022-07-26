
import './App.scss';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
function App() {
  return (
    <div className="App">
  <CartWidget  />
     <NavBar />
     <div className="lista-productos">
    <ItemListContainer section="productos nuevos"/>
    </div>
    </div>
  );
}

export default App;
