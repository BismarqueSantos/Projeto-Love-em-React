import React, {Component} from 'react';
import '../App.css';
import TopoE from './topo_perfil_e'
import Destaque from './destaques'
import Galeria from './galeria_e'
import Descricao from './descricao'
import Localizacao from './localizacao'


class Perfil_E extends Component{
    render(){
        return(
            <div>
            <TopoE />
            <Destaque />
            <Galeria />
            <Descricao />
            <Localizacao />
            </div>
        )
    } 
}

export default Perfil_E