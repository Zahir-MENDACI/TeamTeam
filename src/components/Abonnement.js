import React from 'react'
import './Abonnement.css';
import logo from './lo.png';

function Abonnement() {
    return (
            <div class="Abonnement">
                <img src={logo} />
                <div class="btn">
                    <button>COURS DE TENNIS POUR JEUNES</button>
                    <button>ECOLE DE TENNIS DES JEUNES</button>
                    <button>COURS PRIVES POUR JEUNES</button>
                    <button>COURS DE TENNIS POUR ADULTES</button>
                </div>
                    
            </div>
    )
}

export default Abonnement
