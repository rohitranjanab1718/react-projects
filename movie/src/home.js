import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component{
    state={
        movies:[]
    }
    searchMovie(){
        let searchTerm=document.querySelector("#search").value
        this.props.history.push('/search/'+ searchTerm)
        console.log(searchTerm)
    }
    componentDidMount(){
        axios
        .get("https://api.themoviedb.org/3/movie/top_rated?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=2")
        .then((response)=>{
            console.log(response)
            this.setState({movies:response.data.results})
        })
        .catch(function(error){
            console.log(error)
        })

    }
    render(){
        return(
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-3">welcome to my movie app</h1>
            <p class="display-4">a place where you can have all information about all your movies</p>
            <input type="text" id="search" className="form-control" placeholder="search any movie"></input><br></br>
            <button onClick={this.searchMovie.bind(this)} className="btn btn-dark btn lg">search</button>
            </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Top Movies</h3>
                    </div>
                    <div className="row">
                        {
                        this.state.movies.map(function(movie,index){
                            return <div className="col-4">
                                <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path}/>
                            </div>  
                        }
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Home;