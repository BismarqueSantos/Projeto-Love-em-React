import React from 'react';
import '../App.css';
import NavBar from '../pg_home/NavBar'
import Botao from '../pg_usuario/botoes'
import Footer from '../pg_home/footer'
import Busca from '../pg_usuario/busca'



function Vitrine() {
	return (
		<div className="filtro">
	        <NavBar />
			<Botao />
			<Busca />
			<Footer />
		</div>
	)
}

export default Vitrine