
import './App.css';
import NavBar from './components/_navBar/navBar';
import ItemListContainer from './components/_ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Salu2' />
    </div>
  )
};

export default App;
