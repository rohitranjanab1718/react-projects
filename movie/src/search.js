import axios from 'axios';
import React,{Component} from 'react';
import Card from './card';
class Search extends Component{
    state={
        movies:[],
        term:""
    }
    componentDidMount(){
        let searchTerm=this.props.match.params.term
        //hit the api
        axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=1&include_adult=false&query=" + searchTerm)
        .then((response)=>{
            console.log(response.data.results)
            this.setState({movies:response.data.results,term:searchTerm})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h3>search results for {this.state.term}</h3>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12">
                            <h3 className="display-4">similar to {this.state.term}</h3>                              
                        </div>   
                            {
                                this.state.movies.map((movie,index)=>{
                                    return <div className="col-3">
                                        <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path}/>
                                    </div>
                                })
                            }
                    </div>
            </div>
        )
    }
}
export default Search;