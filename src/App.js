import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Navbarr from './components/Navbarr';
import Products from './components/Products';
import Login from './components/Login';
import Addproj from './components/Addproj';
import Totalview from './components/TotalView';
import Signup from './components/Signup';

function App() {
  return (
    <div>
     <Navbarr/>
       <Routes>
         <Route exact path = '/' element = {<Products/>}/>
         <Route exact path = '/Login' element = {<Login/>}/>
         <Route exact path = '/Addproj' element={<Addproj/>}/>
         <Route exact path = '/Signup'element={<Signup/>}/>
         <Route path = '/:projid' element=<Totalview/>/>
      </Routes>
    </div>
  );
}

export default App;
