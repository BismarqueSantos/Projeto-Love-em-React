import React from 'react';
import imgQuem from '../assets/banner-quem-somos.jpg'

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
								<p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e em sendo utilizado desde o século XVI..</p>
							</div>
							<div className="col-md-4">
								<h2>Visão</h2>
								<p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e em sendo utilizado desde o século XVI..</p>
							</div>
							<div className="col-md-4">
								<h2>Valores</h2>
								<p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e em sendo utilizado desde o século XVI..</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default QuemSomos