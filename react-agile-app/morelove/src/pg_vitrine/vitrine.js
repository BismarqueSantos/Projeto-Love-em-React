import React, {Component} from 'react';
import '../App.css';
import TopoV from './topo_vitrine'
import Busca from './busca_vitrine'


class Vitrine extends Component{
    render(){
        return(
            <div>
	            <TopoV />
	            <Busca />
            </div>
        )
    }
}

export default Vitrine