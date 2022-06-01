import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import Determinant from './Pages/Determinant';
import Addition from './Pages/Addition';
import Inverse from './Pages/Inverse';
import Multiplication from './Pages/Multiplication';
import Power from './Pages/Power';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addition' element={<Addition/>}/>
        <Route path='/inverse' element={<Inverse/>}/>
        <Route path='/power' element={<Power/>}/>
        <Route path='/multiplication' element={<Multiplication/>}/>
        <Route path='/determinant' element={<Determinant/>}/>
        <Route path='/test' element={<Sidebar/>}>
      
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
