import React from 'react';

const Destaque = () =>{
	return (

			<div className="titulo" id="perfil_e">
				<div className="container-fluid">
					<div className="row justify-content-center perfil_E">
						<div className="col-md-1">
						<img src="https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg" alt="" />
						</div>
						<div className="col-md-1">
							<h1>Perfil</h1>
						</div>
					</div>
					<div className="row text-center titulo">
						<div className="col-md-12">
							<h2>Restaurante Chaparral</h2>
						</div>
					</div>
					<div className="row text-center justify-content-around">
						<div className="col-md-5 avaliacao">
							<h2>Avaliações</h2>
						</div>
						<div className="col-md-5 destaque">
							<h2>Destaques</h2>
						</div>
					</div>
				</div>
			</div>
			)
}
export default Destaque
