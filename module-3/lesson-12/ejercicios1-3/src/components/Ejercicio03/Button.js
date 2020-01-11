import React from 'react';

const Button = props => {

    // const refreshUsers = props =>{
    //     props.refreshUsers();
    // }

    return(
        <button type="button" onClick={props.refreshUsers}>More random users</button>
    )
}

export default Button;