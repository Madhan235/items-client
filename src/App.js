import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Forget from './components/Forget';
import ResetPassword from './components/ResetPassword';
import PieChart from './components/PieChart';
 
import BarChart from './components/BarChart';
import ItemsQuantity from './components/ItemsQuantity';

import { Chart as ChartJS} from "chart.js/auto";

function App() {
  return (
    
      <Routes> 

      <Route path='/' element={<Signup/>}/>

      <Route path='/login' element={<Login/>}/> 

      <Route path='/forget-password' element={<Forget/>}/>

      <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>


     <Route path='/home_about_oil_price' element={<Home/>}/>
     
     <Route path='/items_quantity_manager' element={<ItemsQuantity/>}/>
     
     <Route path='/pie_chart_digital_hell' element={<PieChart/>}/>

     <Route path='/bar_chart_drugs_usage' element={<BarChart/>}/>

      
     </Routes>
     
  );
}

export default App;
