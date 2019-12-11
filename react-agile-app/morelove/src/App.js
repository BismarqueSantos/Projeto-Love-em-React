import React from 'react';
import NavBar from './components/NavBar';
import Chamada from './components/chamada';
import Cadastro from './components/cadastro';
import QuemSomos from './components/quem_somos'
import Parceiros from './components/parceiros'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Chamada />
      <Cadastro />
      <modalCadastro />
      <QuemSomos />
      <Parceiros />
      <Footer />
    </div>
  );
}

export default App;
