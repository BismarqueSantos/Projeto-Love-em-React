import React from 'react';

const Conta = () =>{
	return (
			<div className="conta">
				<div className="container">
					<div className="row foto_conta">
						<div className="col-md-5">
							<img src="https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg" alt="Imagem1" />
						</div>
					</div>

					<div className="row foto_conta">
						<div className="col-md-12">
							<label><b>Nome</b></label> <br />
							<input className="form-control" type="text" placeholder="Nome" />
							<br />
						</div>
						<div className="col-md-12">
							<label><b>Sobrenome</b></label> <br />
							<input className="form-control" type="text" placeholder="Sobrenome" />
							<br />
						</div>
						<div className="col-md-12">
							<label><b>Data de Nascimento</b></label> <br />
							<input className="form-control" type="text" placeholder="Data de Nascimento" />
							<br />
						</div>
						<div className="col-md-12">
							<label><b>E-mail</b></label> <br />
							<input className="form-control" type="text" placeholder="E-mail" />
							<br />
						</div>
						<div className="col-md-12">
							<label><b>Senha</b></label> <br />
							<input className="form-control" type="text" placeholder="Senha" /><label> Redefinir Senha</label>
							<br />
						</div>
						<div className="col-md-12">
							<label><b>Sexualidade</b></label> <br />
							<input className="form-control" type="text" placeholder="Sexualidade" />
							<br />
						</div>
						<div className="col-md-12">
							<button className="btn btn success " type="tbutton">Salvar</button>
							<br />
						</div>
					</div>

				</div>
			</div>
			)
}
export default Conta
