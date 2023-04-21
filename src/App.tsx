import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import CadastroTemas from './components/temas/cadastroTemas/CadastroTemas';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div style={{minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarTema" element={<CadastroTemas />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
