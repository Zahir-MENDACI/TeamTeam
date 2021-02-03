import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// https://reactrouter.com/web/example/basic
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

function Navbar() {
    return (
        <Router>
            <div class="all">
                <div class="container">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Club</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">planning</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">S'inscrire</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Abonnements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Covid-19</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route exact path="/" />
            </Switch>
        </Router>
    )
}

export default Navbar
