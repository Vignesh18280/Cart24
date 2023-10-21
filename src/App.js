import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Navbarr from './components/Navbarr';
import Products from './components/Products';
import Login from './components/Login';
import Addproj from './components/Addproj';
import Totalview from './components/TotalView';
import Signup from './components/Signup';
import Cart from './components/Cart';

function App() {
  return (
    <div>
     <Navbarr/>
       <Routes>
         <Route exact path = '/' element = {<Products/>}/>
         <Route exact path = '/Login' element = {<Login/>}/>
         <Route exact path = '/Addproj' element={<Addproj/>}/>
         <Route exact path = '/Signup'element={<Signup/>}/>
         <Route exact path = '/Cart'element={<Cart/>}/>
         <Route path = '/:projid' element={<Totalview/>}/>
      </Routes>
    </div>
  );
}

export default App;
