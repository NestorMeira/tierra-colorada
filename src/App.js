
import './App.scss';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
function App() {
  return (
    <div className="App">
  <CartWidget  />
     <NavBar />
     <div className="lista-productos">
   {/* <ItemListContainer section="productos nuevos"/>  */}
   <ItemDetailContainer />
    </div>
    </div>
  );
}

export default App;
