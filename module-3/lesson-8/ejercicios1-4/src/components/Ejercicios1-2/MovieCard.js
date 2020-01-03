import React from 'react';

class MovieCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movie-card">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <span>{this.props.language}</span>
            </div>
        )
    }
}

export default MovieCard;