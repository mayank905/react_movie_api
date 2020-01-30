// import React from 'react';
// import './App.css';
// import Movie from "./Movie.jsx";
// import Search from "./Search.jsx";
// import Director from "./Director.jsx";
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//
//
// class App extends React.Component {
//     state = {
//         movies: [],
//         directors:[]
//     }
//
//
//     getDirectors = async () => {
//         // let editUrl='https://api.trello.com/1/cards/'+id1+'?name='+name1+'&key='+Key+'&token='+Token
//         let getUrl='http://localhost:3002/api/directors'
//         // const resp = await fetch(editUrl, { method: 'GET' });
//         // if (resp.ok){
//         //     console.log("movie fetched")
//         // }
//         let history=this.state.directors
//         try{
//             let result=await fetch(getUrl,{crossDomain:true,method:'GET'})
//             if(result.ok){
//                 let  result1= await result.json();
//                 history=result1.splice(0)
//                 console.log(history[0])
//                 this.setState({movies:[],directors:history})
//                 console.log("directors retrieved")
//             }}catch (e) {console.log("problem in getting current movie")}
//
//     }
//
//
//   getMovies = async () => {
//       // let editUrl='https://api.trello.com/1/cards/'+id1+'?name='+name1+'&key='+Key+'&token='+Token
//       let getUrl='http://localhost:3002/api/movies'
//       // const resp = await fetch(editUrl, { method: 'GET' });
//       // if (resp.ok){
//       //     console.log("movie fetched")
//       // }
//      let history=this.state.movies
//       try{
//           let result=await fetch(getUrl,{crossDomain:true,method:'GET'})
//           if(result.ok){
//              let  result1= await result.json();
//              history=result1.splice(0)
//             console.log(history[0])
//               this.setState({movies:history,directors:[]})
//               console.log("movies retrieved")
//           }}catch (e) {console.log("problem in getting current movie")}
//
//   }
//
//   render() {
//     return (
//         <Router>
//         <div className="App">
//           <header className="App-header">
//               <Search handleDirectors={this.getDirectors} handleMovies={this.getMovies}/>
//
//               <Route path='/movies' component={
//                   this.state.movies.map((movie,number) => {
//                       return <Movie  key={number} {...movie}/>
//                   })
//               }/>
//
//               <Route path='/directors' component={
//                   this.state.directors.map((director,number) => {
//                       return <Director  key={number} {...director}/>
//                   })
//               }/>
//           </header>
//         </div>
//         </Router>
//     );
//   }
// }
//
// export default App;


import React from 'react';
import './App.css';
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";
import Director from "./Director.jsx";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


class App extends React.Component {
    state = {
        movies: [],
        directors: []
    }
    render() {return(
        <Router>
            <div className="App">
            <header className="App-header">
            <Search/>
            <Switch>
            <Route path='/' exact component={Search}/>
            <Route path='/movies' exact component={Movie}/>
            <Route path='/directors' exact component={Director}/>
            </Switch>
            </header>
            </div>
        </Router>
    )
    }

}
export default App;
