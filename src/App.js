import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Navbarr from './components/Navbarr';
import Products from './components/Products';
import Login from './components/Login';
import Addproj from './components/Addproj';

function App() {
  return (
    <div>
     <Navbarr/>
       <Routes>
         <Route exact path = '/' element = {<Products/>}/>
         <Route exact path = '/Login' element = {<Login/>}/>
         <Route exact path = '/Addproj' element={<Addproj/>}/>
      </Routes>
    </div>
  );
}

export default App;
