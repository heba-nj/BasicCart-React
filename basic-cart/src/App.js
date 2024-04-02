import './App.css';
import { Route,Routes } from 'react-router-dom';
import AppNavbar from './Components/AppNavbar';
import Product from './Components/Products';
import  Cart  from './Components/Cart';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
