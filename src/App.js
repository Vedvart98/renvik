import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
<Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
