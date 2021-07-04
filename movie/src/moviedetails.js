import axios from 'axios';
import React, { Component } from 'react'
import Card from './card'
class MovieDetails extends Component{
    state={
        details:{},
        recommend:[]
    }
    renderGenre(){
        if(this.state.details.genres){
            return this.state.details.genres.map(function(genre){
                return <span style={{marginRight:10}}>{genre.name}</span>
            })
        }
    }
    componentDidMount(){
        let movieId=this.props.match.params.id;
        axios
        .get('https://api.themoviedb.org/3/movie/' +movieId + '?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US')
        .then((response)=>{
            let recommend=this.state.recommend;
            this.setState({details:response.data,recommend:recommend})
            //console.log(this.state.details)
        })
        .catch(function(error){
            console.log(error)
        })
        axios
        .get('https://api.themoviedb.org/3/movie/' +movieId + '/recommendations?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US')
        .then((response)=>{
            let details=this.state.details;
            this.setState({recommend:response.data.results,details:details})
            console.log(this.state);
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    render(){
        let releaseDate=new Date(this.state.details.release_date)
        releaseDate=releaseDate.getFullYear();
        return(<div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div className="row">
                        <div className="col-3">
                        <img  src={"http://image.tmdb.org/t/p/w500/"+ this.state.details.poster_path} class="card-img-top" alt="..." />
                        </div>
                        <div className="col-9">
                        <h1 class="display-4">{this.state.details.title}({releaseDate})</h1>
                        <p>
                        {
                            this.renderGenre()
                        }
                        * {this.state.details.runtime} mins 
                        </p>
                        <h3>{this.state.details.vote_average}</h3>
                        <p><b>{this.state.details.tagline}</b></p>
                        <h3>overview</h3>
                        <p class="lead">{this.state.details.overview}</p>
                        </div>
                    </div>
                 </div>
            </div> 
            
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="display-4">similar to {this.state.details.title}</h3>                              
                        </div>   
                            {
                                this.state.recommend.map((movie,index)=>{
                                    if(index<5){
                                    return <div className="col-3">
                                        <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path}/>
                                    </div>
                                    }
                                })
                            }
                    </div>
                </div>
            </div>    
        )
    }
}
export default MovieDetails;