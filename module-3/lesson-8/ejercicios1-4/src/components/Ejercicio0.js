import React from 'react';

class AwesomeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        this.setState({name: event.target.value.toUpperCase()});
    }
  
    render() {
      return (
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }

export default AwesomeForm;