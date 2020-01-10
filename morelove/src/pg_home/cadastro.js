import React from 'react';
import avaliador1 from '../img/avaliador.jpg'
import estabelecimento from '../img/estabecimento.jpg'

const Cadastro = () =>{
	return (
		<div>
			<div className="pessoas text-center" id="cadastrar">
				<div className="container">
					<div className="row justify-content-around">
						<div className="col-md-8 titulo_ava">
							<h1>CADASTRE-SE</h1>
							<p>Cadastre-se como avaliador, ou cadastre seu estabelecimento para ser avaliado</p>
						</div>
					</div>
					<div className="row justify-content-around">
						<div className="col-md-6 avaliador">
							<img src={avaliador1} alt="Imagem1"/>
						</div>
							<div className="col-md-6 estabelecimento">
								<img src={estabelecimento} alt="Imagem1"/>
							</div>
					</div>
					<div className="row justify-content-around">
						<div className="col-md-4 align-self-center avaliador">
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#avaliador1">
									Cadastre-se
								</button>
							<div className="modal" id="estabelecimento1">
							    <div className="modal-dialog modal-lg">
							        <div className="modal-content">
							            <div className="modal-header">
							                <h4 className="modal-title">Cadastro Estabelecimento</h4>
							                <button type="button" className="close" data-dismiss="modal">&times;</button>
							            </div>
							            <div className="modal-body">
							                <div id="estabelecimento">
							                    <div className="container">
							                        <div className="row">
							                            <div className="col-md-12">
							                                <form className="form-horizontal">
							                                    <fieldset>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="Nome da Empresa" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="CNPJ" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <select name="selectbasic" className="form-control">
							                                                    <option value="1">Brasil</option>
							                                                    <option value="2">SP</option>
							                                                </select>
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="Endereço" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                    </fieldset>
							                                </form>
							                            </div>
							                        </div>
							                    </div>
							                </div>
							                </div>
							            <div className="modal-footer">
							                <button type="button" className="btn btn-success" data-dismiss="modal">Cadastre-se</button>
							                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
							            </div>

							        </div>
							    </div>
							</div>
						</div>
						
						<div className="col-md-4 estabelecimento align-self-center">
						 	<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#estabelecimento1">
							Cadastre-se
							</button>
							<div className="modal" id="avaliador1">
							    <div className="modal-dialog modal-lg">
							        <div className="modal-content">
							            <div className="modal-header">
							                <h4 className="modal-title">Cadastro Avaliador</h4>
							                <button type="button" className="close" data-dismiss="modal">&times;</button>
							            </div>
							            <div className="modal-body">
							                <div id="estabelecimento">
							                    <div className="container">
							                        <div className="row">
							                            <div className="col-md-12">
							                                <form className="form-horizontal">
							                                    <fieldset>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="Nome" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="CPF" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="Genero" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <select name="selectbasic" className="form-control">
							                                                    <option value="1">Brasil</option>
							                                                    <option value="2">SP</option>
							                                                </select>
							                                            </div>
							                                        </div>
							                                        <div className="form-group row">
							                                            <div className="col-md-12">
							                                                <input name="textinput" type="text" placeholder="Endereço" className="form-control input-md" />
							                                            </div>
							                                        </div>
							                                    </fieldset>
							                                </form>
							                            </div>
							                        </div>
							                    </div>
							                </div>
							                </div>
							            <div className="modal-footer">
							                <button type="button" className="btn btn-success" data-dismiss="modal">Cadastre-se</button>

							                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
};

export default Cadastro