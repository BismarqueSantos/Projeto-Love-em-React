import React from 'react';
import img1 from '../img/churrascaria.jpg';
import img2 from '../img/balada.jpg';
import img3 from '../img/cinema.png';
import img4 from '../img/praia.jpg';
import img5 from '../img/restaurante.jpg';

var churrascaria = {
	backgroundImage: "url(" +img1+ ")"
}
var balada = {
	backgroundImage: "url(" +img2+ ")"
}
var cinema = {
	backgroundImage: "url(" +img3+ ")"
}
var praia = {
	backgroundImage: "url(" +img4+ ")"
}
var restaurante = {
	backgroundImage: "url(" +img5+ ")"
}

const Podio = () =>{
	return (
		<div>
			<div className="podio"  id="mural">
			    <div className="container">
			        <div className="row  text-center">
			            <div className="col-md-12">
			                <h2>Pódio dos Estabelecimentos</h2>
			                <div className="row justify-content-center">
			                    <div className="col-md-3 align-self-center img" style={churrascaria}>
			                        <h4>Churrascaria</h4>
			                    </div>
			                </div>
			                    
			                <div className="row justify-content-around">
			                    <div className="col-md-3 align-self-center img" style={balada}>
			                        <h4>Balada</h4>
			                    </div>
			                    
			                    <div className="col-md-3 align-self-center img" style={cinema}>
			                        <h4>Cinema</h4>
			                    </div>
			                </div>
			                    
			                <div className="row justify-content-between">
			                    <div className="col-md-3 align-self-center img" style={praia}>
			                        <h4>Praia</h4>
			                    </div>
			                    
			                    <div className="col-md-3 align-self-center img" style={restaurante}>
			                        <h4>Restaurante</h4>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	)
}


export default Podio