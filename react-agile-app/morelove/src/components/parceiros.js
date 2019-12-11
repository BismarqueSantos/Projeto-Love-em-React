import React from 'react';
import imgpar from '../assets/parceiros.jpg';
import imgSlider1 from '../assets/parceiro1.png';
import imgSlider2 from '../assets/parceiros2.png';
import imgSlider3 from '../assets/parceiros3.jpg';

var imgParceiros = {
	backgroundImage: "url(" +imgpar+ ")"
}

const Parceiros = () =>{
	return (
		<div>
			<div className="parceiros" id="parceria" style={imgParceiros}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12">
							<h1>Patrceiros</h1>
							<div id="demo" className="carousel slide" data-ride="carousel">
								<ul className="carousel-indicators">
									<li data-target="#demo" data-slide-to="0" className="active"></li>
									<li data-target="#demo" data-slide-to="1"></li>
									<li data-target="#demo" data-slide-to="2"></li>
								</ul>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={imgSlider1} alt="Imagem1"/>
									</div>
									<div className="carousel-item">
										<img src={imgSlider2} alt="Imagem1"/>
									</div>
									<div className="carousel-item">
										<img src={imgSlider3} alt="Imagem1"/>
									</div>
								</div>
								<a className="carousel-control-prev" href="#demo" data-slide="prev">
									<span className="carousel-control-prev-icon"></span>
								</a>
								<a className="carousel-control-next" href="#demo" data-slide="next">
									<span className="carousel-control-next-icon"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Parceiros