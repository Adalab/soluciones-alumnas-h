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
            age: target.id
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
        const {
            title,
            description,
            language,
            age,
            genres,
            file
        } = this.state

        return(
            <div className="movie">
                <MovieForm 
                    handleFormChange={this.handleFormChange}
                    handleRadioChange={this.handleRadioChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    handleFileChange={this.handleFileChange}
                    title={title}
                    description={description}
                    language={language}

                />
                <MovieCard 
                    title={title}
                    description={description}
                    language={language}
                    age={age}
                    genres={genres}
                    file={file}
                />
            </div>
        )
    }
}

export default Movie;