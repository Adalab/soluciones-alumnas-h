import React from 'react';
import { Link } from 'react-router-dom';

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.paintUserItem = this.paintUserItem.bind(this);
        this.paintUsers = this.paintUsers.bind(this);
    }

    paintUserItem(user){
        return(
            <li key={user.login.uuid} className="user">
                <div className="profile-picture" style={{backgroundImage: `url(${user.picture.medium})`}}></div>
                <div className="user-data">
                    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                    <p>{`${user.location.city}, ${user.location.state}`}</p>
                    <p>Age: {user.dob.age}</p>
                    <Link to={`/user/${user.login.uuid}`}>
                        <span id={user.login.uuid}>More info</span>
                    </Link>
                </div>
            </li>
        )
    }

    paintUsers(){
        const userData = this.props.users;

        if (userData !== ''){
            const users = userData
            .filter(user => this.props.cities.length === 0 ? true : this.props.cities.includes(user.location.city))
            .filter(user => this.props.sex === 'any' ? true : user.gender === this.props.sex)
            .map((user, index) => this.paintUserItem(user, index));
            return users;
        }
    }
    
    render(){
        return(
            <ul className="user-list">
                {this.paintUsers()}
            </ul>
        )
    }
}

export default UserList;