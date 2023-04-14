import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
