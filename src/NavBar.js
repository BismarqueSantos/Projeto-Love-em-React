import React from 'react';
import love from './assets/+love.png'

const NavBar = () =>{
	return (
		<div>
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
	  		<div className="container">
	          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	              <span className="navbar-toggler-icon"></span>
	          </button>
	          <div className="collapse navbar-collapse" id="collapsibleNavbar">
				 <ul className="navbar-nav">
				      <li className="nav-item">
				          <a className="nav-link" href="#chamada">Home</a>
				      </li>
				      <li className="nav-item dropdown">
				          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
				              Cadastro
				          </a>
				          <div className="dropdown-menu">
				              <a className="dropdown-item" href="#cadastrar">Usuário</a>
				              <a className="dropdown-item" href="#cadastrar">Estabelecimento</a>
				          </div>
				      </li>
				      <li className="nav-item dropdown">
				          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
				              Pódio
				          </a>
				          <div className="dropdown-menu">
				              <a className="dropdown-item" href="#mural">Avaliadores</a>
				              <a className="dropdown-item" href="#mural">Estabelecimento</a>
				          </div>
				      </li>
				      <li nav-item>
				    <a href="#chamada" className="navbar-brand text-center">
				        <img src={love} className="d-inline-block align-top" />
				        <p>O Amor Pode Mudar o Mundo</p>
				    </a>
				  </li>
				      <li className="nav-item">
				          <a className="nav-link" href="#quem">Quem Somos</a>
				      </li>
				      <li className="nav-item">
				          <a className="nav-link" href="#parceria">Parceiros</a>
				      </li>
				      <li className="nav-item">
				          <a className="nav-link" href="#cont">Contato</a>
				      </li>
				 </ul>
				  </div>
	        </div>
	    </nav>
    </div>
	)
}

export default NavBar