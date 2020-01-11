import React from 'react';
import { Link } from 'react-router-dom';

class UserDetails extends React.Component{
    constructor(props){
        super(props);
        this.renderDetails = this.renderDetails.bind(this);
    }

    renderDetails(user){
        return(
            <div className="user">
                <div className="details-picture" style={{backgroundImage: `url(${user.picture.medium})`}}></div>
                <div className="user-data">
                    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                    <p>City:{`${user.location.city}`}</p>
                    <p>State:{`${user.location.state}`}</p>
                    <p>Age: {user.dob.age}</p>
                    <p>Sex: {user.gender}</p>
                </div>
                <Link to="/">
                    <span>Close</span>
                </Link>
            </div>
        )
    }
    
    render(){
        return(
            <div className="user-details">
                {this.renderDetails(this.props.user)}
            </div>
        )
    }
}

export default UserDetails;