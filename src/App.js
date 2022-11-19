//import logo from './logo.svg';
import './App.css';
import NavBar from './components/_navBar/navBar';
import ItemListContainer from './components/_ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar colorTitle='#1a1a1a' bgColor='#4376A3' />
      <ItemListContainer greeting='Salu2' />
    </div>
  );
}

export default App;
