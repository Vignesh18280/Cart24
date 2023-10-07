import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Navbarr from './components/Navbarr';
import Products from './components/Products';

function App() {
  return (
    <div>
     <Navbarr/>
      <Routes>
       <Products/>
      </Routes>
    </div>
  );
}

export default App;
