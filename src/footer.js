import React from 'react';

const Footer = () =>{
	return (
		<div>
			<div className="rodape" id="cont">
				<div className="container">
					<div className="row">
						<div className="col-md-4 menu">
							<h3>Menu</h3>
							<ul className="navbar-nav">
					            <li className="nav-item">
					                <a className="nav-link" href="#">Home</a>
					            </li>
					            <li className="nav-item">
					                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
					                    Cadastro
					                </a>
					                    <a className="dropdown-item" href="#">Usuário</a>
					                    <a className="dropdown-item" href="#">Estabelecimento</a>
					            </li>
					            <li className="nav-item">
					                <a className="nav-link" href="#">Quem Somos</a>
					            </li>
					            <li className="nav-item">
					                <a className="nav-link" href="#">Contato</a>
					            </li>
					        </ul>
						</div>
						
						<div className="col-md-4 contatos">
							<h3>Contato</h3>
							<h5>TEL: (11) 1234-5678</h5>
							<h5>CEL: (11) 91234-5678</h5>
							<h5>E-mail: love@love.com.br</h5>
							<h5>E-mail: love@love.com.br</h5>
						</div>

						<div className="col-md-4 formulario">
							<h3>Envie suas dicas</h3>
							<form>
							    <div className="formulario">
							        <form>
							            <input className="form-control" type="text" name="username" placeholder="Nome" />
							            <input className="form-control" type="text" name="username" placeholder="E-mail" />
							        </form>
							    </div>

							    <div className="comentario">
							        <form>
							            <textarea className="form-control" name="message" rows="5" cols="30" placeholder="Digite sua Mensagem"></textarea>
							        </form>
							    </div>
							    <div className="botao_enviar">
							        <input type="submit" type="button" className="btn btn-primary" value="Enviar" />
							    </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Footer