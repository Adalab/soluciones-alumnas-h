import React from 'react';

const MovieCard = props =>{
    return(
        <div className="movie-card">
            <h2>{props.title}</h2>
            <span>{props.language}</span>
            <p>{props.description}</p>
            <div className="card-footer">
                <p>{props.age}</p>
                <ul className="genre">{props.genres.map((genre, index)=><li key={index}>{genre}</li>)}</ul>
            </div>
        </div>
    )
};

MovieCard.defaultProps = {
    title: 'Movie Title.',
    description: 'Movie description.',
    language: 'Movie Language',
    age: 'A',
    genres: ['genres']
}

export default MovieCard;