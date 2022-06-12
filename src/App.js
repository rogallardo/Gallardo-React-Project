//@ts-check
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
   <>
      <NavBar />
      <ItemListContainer greeting="Este es mi contenedor de items"/>

   </>
)}

export default App;
