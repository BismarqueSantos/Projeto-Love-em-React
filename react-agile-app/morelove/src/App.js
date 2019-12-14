import React from 'react';
import NavBar from './components/NavBar';
import Chamada from './components/chamada';
import Podio from './components/podio';
import Cadastro from './components/cadastro';
import QuemSomos from './components/quem_somos'
import Parceiros from './components/parceiros'
import Footer from './components/footer'
import BarraFim from './components/barra_fim'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Chamada />
      <Cadastro />
      <Podio />
      <QuemSomos />
      <Parceiros />
      <Footer />
      <BarraFim />
    </div>
  );
}

export default App;
