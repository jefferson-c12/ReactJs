import './App.css';
import NavBar from './components/_navBar/navBar';
import Home from './components/_Home/Home';
import ItemListContainer from './components/_ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/_ItemDetailContainer/ItemDetailContainer';
import ViewCart from './components/_ViewCart/ViewCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './components/_Checkout/Checkout';
import AboutUs from './components/_AboutUs/AboutUs';
import Footer from './components/_Footer/Footer';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer text='PRODUCTOS' />} />
            <Route path='/productos/categoria/:categoryId' element={<ItemListContainer text='PRODUCTOS' />} />
            <Route path='/detalles/:itemId' element={<ItemDetailContainer />} />
            <Route path='/micarrito' element={<ViewCart />} />
            <Route path='/micarrito/formulario' element={<Checkout />} />
            <Route path='/nosotros' element={<AboutUs />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
};

export default App;

