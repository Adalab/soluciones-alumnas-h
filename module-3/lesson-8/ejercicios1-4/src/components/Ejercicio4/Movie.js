import React from 'react';
import MovieForm from './MovieForm';
import MovieCard from './MovieCard';

class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Movie title.',
            description: 'Movie description.',
            language: 'Language.',
            age:'A',
            genres: [],
            file: 'https://via.placeholder.com/200x300/#eaeaea/ffffff/?text=poster'
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFormChange(target){
        this.setState({
            [target.name]: target.value
        })
    }

    handleRadioChange(target){
        this.setState({
            age: target.value
        })
    }

    handleCheckboxChange(event, target){
        const value = target.value;

        if(this.state.genres.includes(value)){
            const newAge = this.state.genres.filter(genre=> genre !==value);
            this.setState({
                genres: newAge
            })
        } else if(!this.state.genres.includes(value) && this.state.genres.length < 3){
            const newAge = [...this.state.genres, value];
            this.setState({
                genres: newAge
            })
        } else {
            event.preventDefault();
            alert('You can only select 3 genres.')
        }
    }

    handleFileChange(target) {
        this.setState({
          file: URL.createObjectURL(target.files[0])
        })
      }

    render(){
        return(
            <div className="movie">
                <MovieForm 
                    handleFormChange={this.handleFormChange}
                    handleRadioChange={this.handleRadioChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    handleFileChange={this.handleFileChange}
                    title={this.state.title}
                    description={this.state.description}
                    language={this.state.language}

                />
                <MovieCard 
                    title={this.state.title}
                    description={this.state.description}
                    language={this.state.language}
                    age={this.state.age}
                    genres={this.state.genres}
                    file={this.state.file}
                />
            </div>
        )
    }
}

export default Movie;