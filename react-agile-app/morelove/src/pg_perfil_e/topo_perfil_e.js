import React from 'react';
import love from '../img/+love.png'
import {Link} from 'react-router-dom'


const TopoE = () =>{
	return (
		<div className="topoVitrine">
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
		  		<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
					          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					              <span className="navbar-toggler-icon"></span>
					          </button>
				          	<div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
								 <ul className="navbar-nav">
								      <li nav-item>
									    <a href="#chamada" className="navbar-brand text-center">
									        <img src={love} className="d-inline-block align-top" alt="Imagem1" />
									        <p>O Amor Pode Mudar o Mundo</p>
									    </a>
									  </li>
									  <li className="nav-item">
								          <Link to='/App'>
											  <button type="button" className="btn btn-success">
													Voltar
											  </button>
										  </Link>
								      </li>
								 </ul>
							  </div>
					    </div>
				    </div>
		        </div>
		    </nav>
	    </div>
	)
}

export default TopoE