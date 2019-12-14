import React, {Component} from 'react';
import '../App.css';
import TopoV from './topo_vitrine'


class Vitrine extends Component{
    render(){
        return(
            <div>
            <TopoV />
                <div className="titulo">
					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<h1>Visite</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="filtro">
					<div className="container">
						<div className="row">
							<div className="col-md-3 colona_filtro">
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
							<div className="col-md-9 estaFiltrados"></div>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

export default Vitrine