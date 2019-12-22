import React from 'react';
import MovieForm from './MovieForm';
import MovieCard from './MovieCard';

class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            language: ''
        }
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(target){
        this.setState({
            [target.name]: target.value
        })
    }

    render(){
        return(
            <div className="movie">
                <MovieForm 
                    handleFormChange={this.handleFormChange}
                />
                <MovieCard 
                    title={this.state.title}
                    description={this.state.description}
                    language={this.state.language}
                />
            </div>
        )
    }
}

export default Movie;