import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component{
    state={}
    render(){
        return(
            <div class="card mt-3">
  <img  src={"http://image.tmdb.org/t/p/w500/"+this.props.path} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    <p class="card-text">{this.props.overview}</p>
    <Link to={"/details/"+ this.props.id} class="btn btn-dark btn-block">Go somewhere</Link>
  </div>
</div>
        )
    }
}
export default Card;