import React from 'react';
import imgQuem from '../img/banner-quem-somos.jpg'

var avaliacao = {
	backgroundImage: "url(" +imgQuem+ ")"
}


const QuemSomos = () =>{
	return (
		<div>
			<div className="quem_somos text-center" id="quem" style={avaliacao}>
				<div className="missoes">
					<div className="container-fluid">
						<div className="row ">
							<div className="col-md-12">
								<h1>Quem Somos</h1>
							</div>
							<div className="col-md-4">
								<h2>Missão</h2>
								<p>A razão da nossa existência é de promover o respeito, equidade, diversidade e bom relacionamento  onde quer que você vá.</p>
							</div>
							<div className="col-md-4">
								<h2>Visão</h2>
								<p>Ser reconhecido pela excelência ao proporcionar bem estar em diversos ambientes.</p>
							</div>
							<div className="col-md-4">
								<h2>Valores</h2>
								<p>Valores: Empatia, Equidade, Respeito e Integridade são primordiais para nosso trabalho acontecer.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default QuemSomos