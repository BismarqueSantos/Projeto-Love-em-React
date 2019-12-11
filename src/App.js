import React from 'react';
import NavBar from './NavBar';
import Chamada from './chamada';
import Cadastro from './cadastro';
import modalCadastro from './modal'
import QuemSomos from './quem_somos'
import Parceiros from './parceiros'
import Footer from './footer'
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


