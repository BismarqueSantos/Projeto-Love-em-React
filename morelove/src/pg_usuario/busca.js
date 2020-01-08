import React from 'react';

const Busca = () =>{
	return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 colona_filtro">
					<div className="row">
						<div className="col-md-12">
							<form className="example">
							  <input type="text" className="form-control" placeholder="Buscar..." name="search" />
							  <button type="submit" className="bta btn-success"><i className="fa fa-search"></i></button>
							</form>
						</div>
					</div>
						<h4>Filtre sua Busca</h4>
						<div className="row">
							<div className="col-md-12">
								<h5>Tipos de Estabelecimentos</h5>
								<form>
								  	<input type="radio" name="gender" /> Balada<br />
								  	<input type="radio" name="gender" /> Restaurante<br/>
							 	 	<input type="radio" name="gender" /> Cinema <br />  
								 	<input type="radio" name="gender" /> Churrascaria <br />  
								 	<input type="radio" name="gender" /> Praia <br />  
								 	<input type="radio" name="gender" /> Lanchonete <br />  
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h5>Localização</h5>
								<h6>Estado</h6>
							</div>
							<div className="col-md-12">
								<select name="" id="">
									<option value="">--Selecione--</option>
									<option value="">São Paulo</option>
									<option value="">São Paulo</option>
									<option value="">São Paulo</option>
									<option value="">São Paulo</option>
								</select>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6>Cidade</h6>
							</div>
							<div className="col-md-12">
								<select name="" id="">
									<option value="">--Selecione--</option>
									<option value="">Barueri</option>
									<option value="">Osasco</option>
									<option value="">Jandira</option>
									<option value="">Carapicuiba</option>
								</select>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								 <input type="radio" name="gender" value="other" />  Melhor Avaliado<br />
							</div>
						</div>
					</div>
					<div className="col-md-9 estaFiltrados">
						<div className="row linhaF">
							<div className="col-md-4 imgR">
								<img src="https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg" alt="Teste" />
							</div>
							<div className="col-md-8 detaR align-self-center">
								<h4>Restaurante Chaparral</h4>
								<div className="bola"></div>
								<h6>Rua Todo mundo doido</h6>
							</div>
						</div>

						<div className="row linhaF">
							<div className="col-md-4 imgR">
								<img src="https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg" alt="Teste" />
							</div>
							<div className="col-md-8 detaR align-self-center">
								<h4>Restaurante Chaparral</h4>
								<div className="bola"></div>
								<h6>Rua Todo mundo doido</h6>
							</div>
						</div>

						<div className="row linhaF">
							<div className="col-md-4 imgR">
								<img src="https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg" alt="Teste" />
							</div>
							<div className="col-md-8 detaR align-self-center">
								<h4>Restaurante Chaparral</h4>
								<div className="bola"></div>
								<h6>Rua Todo mundo doido</h6>
							</div>
						</div>

					</div>
				</div>
			</div>
			)
}
export default Busca