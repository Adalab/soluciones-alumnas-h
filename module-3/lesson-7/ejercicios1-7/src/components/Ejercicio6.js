import React from 'react';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Ada',
            lastName: 'Lovelace',
            birdthDate: {
                day: 10,
                month: 'diciembre',
                year: 1815
            }
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleNameChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value 
        })
    }

    handleDateChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => {
            return {
              birdthDate: {
                ...prevState.birdthDate,
                [name]: value 
              }
            };
          });
    }

    render(){
        return(
            <div>
                <form action="" method="POST">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleNameChange}/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                    <label>Birth Date:</label>
                    <input type="number" name="day" placeholder="DD" value={this.state.birdthDate.day} onChange={this.handleDateChange}/>
                    <input type="text" name="month" placeholder="month" value={this.state.birdthDate.month} onChange={this.handleDateChange}/>
                    <input type="number" name="year" placeholder="YYYY" value={this.state.birdthDate.year} onChange={this.handleDateChange}/>

                </form>
            </div>
        )
    }
}

export default UserInfo;