import React from 'react';

const MovieCard = props =>{
    const {
        file,
        title,
        language,
        description,
        age,
        genres
    } = props;
    return(
        <div className="movie-card-4">
            <div className="movie-poster">
                <img src={file} alt="poster"></img>
            </div>
            <div className="movie-info">
                <h2>{title}</h2>
                <span>{language}</span>
                <p>{description}</p>
                <div className="card-footer">
                    <p>{age}</p>
                    <ul className="genre">{genres.map((genre, index)=><li key={index}>{genre}</li>)}</ul>
                </div>
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