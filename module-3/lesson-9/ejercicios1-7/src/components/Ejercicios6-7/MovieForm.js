import React from 'react';

class MovieForm extends React.Component{
    constructor(props){
        super(props);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFormChange(event){
        const target = event.target;
        this.props.handleFormChange(target);
    }

    handleRadioChange(event){
        const target = event.target;
        this.props.handleRadioChange(target);
    }

    handleCheckboxChange(event){
        const target = event.target;
        this.props.handleCheckboxChange(event, target);
    }

    handleFileChange(event){
        const target = event.target;
        this.props.handleFileChange(target);
    }

    render(){
        return(
            <form className="movie-form" action="" method="POST">
                <label htmlFor="title">Movie title:</label>
                <input 
                    type="text" 
                    value={this.props.title}
                    name="title" 
                    id="title" 
                    onChange={this.handleFormChange}/>
                <label htmlFor="description">Description:</label>
                <textarea 
                    value={this.props.description}
                    name="description" 
                    id="description" 
                    onChange={this.handleFormChange}/>
                <label htmlFor="language">Language:</label>
                <input 
                    type="text" 
                    value={this.props.language}
                    name="language" 
                    id="language" 
                    onChange={this.handleFormChange}/>
                <div className="age-genres">
                    <div className="age-rate">
                        <label>Age rate:</label>
                        <div className="input-radio">
                            <input
                                type="radio"
                                value="A"
                                id="A"
                                name="age-rate"
                                onClick={this.handleRadioChange}
                            />
                            <label htmlFor="A">A</label>
                        </div>
                        <div className="input-radio">
                            <input
                                type="radio"
                                value="7"
                                id="7"
                                name="age-rate"
                                onClick={this.handleRadioChange}
                            />
                            <label htmlFor="7">7</label>
                        </div>
                        <div className="input-radio">
                            <input
                                type="radio"
                                value="12"
                                id="12"
                                name="age-rate"
                                onClick={this.handleRadioChange}
                            />
                            <label htmlFor="12">12</label>
                        </div>
                        <div className="input-radio">
                            <input
                                type="radio"
                                value="16"
                                id="16"
                                name="age-rate"
                                onClick={this.handleRadioChange}
                            />
                            <label htmlFor="16">16</label>
                        </div>
                        <div className="input-radio">
                            <input
                                type="radio"
                                value="18"
                                id="18"
                                name="age-rate"
                                onClick={this.handleRadioChange}
                            />
                            <label htmlFor="18">18</label>
                        </div>
                    </div>
                    <div className="genres">
                        <label>Genres:</label>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="comedy"
                                id="comedy"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="comedy">Comedy</lable>
                        </div>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="drama"
                                id="drama"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="drama">Drama</lable>
                        </div>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="family"
                                id="family"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="family">Family</lable>
                        </div>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="action"
                                id="action"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="action">Action</lable>
                        </div>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="thriller"
                                id="thriller"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="thriller">Thriller</lable>
                        </div>
                        <div className="input-checkbox">
                            <input
                                type="checkbox"
                                value="horror"
                                id="horror"
                                name="genres"
                                onClick={this.handleCheckboxChange}
                            />
                            <lable htmlFor="horror">Horror</lable>
                        </div>
                    </div>
                </div>
                <label>
                    Upload file:
                    <input 
                        type="file" 
                        ref={this.fileInput } 
                        onChange={this.handleFileChange}
                    />
                </label>
            </form>
        )
    }
};

export default MovieForm;