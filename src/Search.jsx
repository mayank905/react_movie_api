import React from 'react';
import "./Search.css";
import {Link} from 'react-router-dom'
class Search extends React.Component {
    render() {
        // const {title} = this.state;
        return (
            <div className="search">
                {/*<input className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>*/}
                <Link to='/movies'>
                    <input className="button" type="submit"  value="GetAllMovies"/></Link>
                <Link to='/directors'>
                <input className="button" type="submit" value="GetAllDirectors"/></Link>
            </div>
        )
    }
}

export default Search
