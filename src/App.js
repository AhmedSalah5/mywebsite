import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
