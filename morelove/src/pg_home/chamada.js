import React from 'react';
import celular from '../img/nosso_app.png'
import app1 from '../img/appstory.png'
import app2 from '../img/googleplay.png'

const Chamada = () =>{
	return (
		<div>
			<div className="jumbotron" id="chamada">
				<div className="chamada_app">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 banner">
								<img src={celular} className="d-inline-block align-top" alt="Imagem1"/>
							</div>
							<div className="col-md-6 chama align-self-center text-center">
								<div className="row">
									<div className="col-md-12">
										<h1>O Amor pode mudar o mundo</h1>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-md-12">
										<h5>Baixe Agora nosso Aplicativo</h5>
										<p>A Forma mais rapida de avaliar estabelecimentos, e ter acesso aos estabelecimentos com mais empatia com a comunidade!</p>
										<div className="row  justify-content-center google">
											<div className="col-md-6 text-center">
												<img src={app1} className="d-inline-block align-top" alt="Imagem1"/>
												<img src={app2} className="d-inline-block align-top" alt="Imagem1"/>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Chamada