import './App.css';
import NavBar from './components/_navBar/navBar';
import Home from './components/_Home/Home';
import ItemListContainer from './components/_ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/_ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home greeting='Salu2' />} />
          <Route path='/productos' element={<ItemListContainer text='PRODUCTOS' />} />
          <Route path='/detalles/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;

