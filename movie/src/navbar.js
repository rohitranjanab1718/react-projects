import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
    state={

    }
    render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#">MovieApp</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link class="nav-link active" to="/">Home </Link>
            <a class="nav-link" href="#">recommend</a>
            </div>
            </div>
        </nav>
        )
    }
}
export default Navbar;