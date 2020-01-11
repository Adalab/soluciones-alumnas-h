import React from 'react';
import UserList from './UserList';
import UserFilter from './UserFilter';

class UserPage extends React.Component{
    render(){
        return(
            <div className="App">
                <UserFilter
                    users={this.props.users}
                    selectCities={this.props.selectCities}
                    cities={this.props.cities}
                    selectSex={this.props.selectSex}
                />
                <UserList
                    users={this.props.users}
                    cities={this.props.cities}
                    sex={this.props.sex}
                    selectUser={this.props.selectUser}
                />
            </div>
        );
    }
}

export default UserPage;