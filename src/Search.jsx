import React from 'react';
import "./Search.css";
import {Link} from 'react-router-dom'
class Search extends React.Component {
    // state= {
    //     title: ''
    // }

    handleDirectors = () => {
        // const {title} = this.state;
        this.props.handleDirectors()
        // this.setState({title: ''})
    }

    handleMovies = () => {
        // const {title} = this.state;
        this.props.handleMovies();
        // this.setState({title: ''})
    }
    //
    // handleInputTitle = (event) => {
    //     event.preventDefault();
    //     const title = event.target.value;
    //     this.setState({title});
    // }

    render() {
        // const {title} = this.state;
        return (
            <div className="search">
                {/*<input className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>*/}
                <Link to='/movies'>
                    <input className="button" type="submit" onClick={this.handleMovies} value="GetAllMovies"/></Link>
                <Link to='/directors'>
                <input className="button" type="submit" onClick={this.handleDirectors} value="GetAllDirectors"/></Link>
            </div>
        )
    }
}

export default Search
