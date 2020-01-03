import React from 'react';

class MovieForm extends React.Component{
    constructor(props){
        super(props);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event){
        const target = event.target;
        this.props.handleFormChange(target);
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
                
            </form>
        )
    }
};

export default MovieForm;