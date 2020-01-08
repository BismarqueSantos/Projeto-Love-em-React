import React from 'react';
import '../App.css';
import NavBar from '../pg_home/NavBar'
import Botao from './botoes'
import TituloU from './tituloU'
import Footer from '../pg_home/footer'


function Usuario() {
        return(
            <div>
                <NavBar />
                <Botao />
                <TituloU />
                <Footer />
            </div>
        );
}

export default Usuario