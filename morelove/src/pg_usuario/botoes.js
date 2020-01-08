import React from 'react';
import {Link} from 'react-router-dom';

const Botao = () =>{
	return (
			<div className="botao">
				<div className="container-fluid">
					<div className="row perfil_E">
						<div className="col-md-3">
							<Link to='/usuario'>
							   <button>
								   <a href="#teste">
								        Perfil
								    </a>
							    </button>
						  </Link>
						</div>

						<div className="col-md-3">
						   <Link to='/vitrine'>
							   <button>
								   <a href="#teste">
								        Vitrine
								    </a>
							    </button>
						  </Link>
						</div>

						<div className="col-md-3">
							<button>Destaques</button>
						</div>

						<div className="col-md-3">
							<button>Configuração</button>
						</div>
					</div>
				</div>
			</div>
			)
}
export default Botao