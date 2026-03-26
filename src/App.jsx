import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartItem from './components/CartItem';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>  
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/carro" element={<CartItem />} />
      </Routes>


    </BrowserRouter>
    
  )
}

export default App
