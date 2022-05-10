
import './App.css';
import "./styles/locations.css"
import Home from './components/home';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbars from './components/navbar';
import Hotels from './pages/hotels';
import Beaches from './pages/beaches';
import Hotel from './pages/hotel';

function App() {
  return (
    <div >
      <BrowserRouter>
{/* <React.StrictMode> */}
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/index' element={<Index/>}></Route>
    <Route path='/hotels' element={<Hotels/>}></Route>

   
    <Route path='/beaches' element={<Beaches/>}></Route>
 
    <Route path='/hotel/:hotelId' element={<Hotel/>}></Route>
  </Routes>
   
  {/* </React.StrictMode> */}
  </BrowserRouter>
     
    </div>
  );
}

export default App;
