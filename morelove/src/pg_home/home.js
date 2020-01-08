import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Chamada from './chamada';
import Podio from './podio';
import Cadastro from './cadastro';
import QuemSomos from './quem_somos'
import Parceiros from './parceiros'
import Footer from './footer'
import BarraFim from './barra_fim'

const Home = () =>{
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
	)
}


export default Home