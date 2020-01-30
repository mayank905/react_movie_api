import React from 'react';
import "./Director.css";

class Director extends React.Component {
    render() {
        const {id, name} = this.props;

        return (
            <div className="movie">
                <div className="title-year">
                    <h4 className="id">{id}</h4>
                    <h5 className="name">{name}</h5>
                </div>
            </div>
        )
    }
}

export default Director;
