
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbars from './components/navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
{/* <React.StrictMode> */}
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/index' element={<Index/>}></Route>
 
  </Routes>
   
  {/* </React.StrictMode> */}
  </BrowserRouter>
     
    </div>
  );
}

export default App;
