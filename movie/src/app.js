 import React,{Component} from 'react';
 import Navbar from './navbar';
 import Home from './home';
 import Search from './search';
 import { Route, Switch } from 'react-router';
 import MovieDetails from './moviedetails';
 class App extends Component{
    state={

    }
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/details/:id' component={MovieDetails}></Route>
                    <Route path='/search/:term' component={Search}></Route>
                </Switch>
            </div>
        );
    }
 }
 export default App;
 