import React from 'react';
import People from './People';
import {fetchUsers} from '../../services/Api';
import Button from './Button';

class AppEjercicio03 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people: [
                {
                  gender: 'female',
                  name: {
                    title: 'ms',
                    first: 'samantha',
                    last: 'elliott'
                  }
                }
            ]
        };
        this.refreshUsers = this.refreshUsers.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers(){
        fetchUsers()
        .then(data => {
            this.setState({
                people: data.results
            })
        })
    }

    refreshUsers(){
        this.fetchUsers();
    }

    componentDidMount(){
        this.fetchUsers();
    }

    render(){
        return(
            <div className="App">
                <People
                    people={this.state.people}
                />
                <Button
                    refreshUsers={this.refreshUsers}
                />
            </div>
        )
    }
}

export default AppEjercicio03;