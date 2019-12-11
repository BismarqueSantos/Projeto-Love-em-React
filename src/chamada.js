import React from 'react';
import celular from './assets/nosso_app.png'
import app1 from './assets/appstory.png'
import app2 from './assets/googleplay.png'

const Chamada = () =>{
	return (
		<div>
			<div className="jumbotron" id="chamada">
				<div className="chamada_app">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 banner">
								<img src={celular} className="d-inline-block align-top" />
							</div>
							<div className="col-md-6 chama align-self-center text-center">
								<div className="row">
									<div className="col-md-12">
										<h1>O Amor pode mudar o mundo</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<h5>Baixe Agora nosso Aplicativo</h5>
										<p>A Forma mais rapida de avaliar estabelecimentos, e ter acesso a avaliação geral de cada um de acordo com a sua preferência.</p>
										<div className="row google">
											<div className="col-md-6 text-right">
												<img src={app1} className="d-inline-block align-top" />
											</div>
											<div className="col-md-6 text-left">
												<img src={app2} className="d-inline-block align-top" />
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