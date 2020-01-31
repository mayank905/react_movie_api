import React from 'react';
import './App.css';
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";
import Director from "./Director.jsx";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import MovieDetail from "./movieDetail"


class App extends React.Component {
    state = {
        movies: [],
        directors: []
    }
    render() {return(
        <Router>
            <div className="App">
            <header className="App-header">
            <Switch>
            <Route path='/' exact component={Search}/>
            <Route path='/movies' exact component={Movie}/>
            <Route path='/directors' exact component={Director}/>
            <Route path='/movies/:id' component={MovieDetail}/>
            </Switch>
            </header>
            </div>
        </Router>
    )
    }

}
export default App;
