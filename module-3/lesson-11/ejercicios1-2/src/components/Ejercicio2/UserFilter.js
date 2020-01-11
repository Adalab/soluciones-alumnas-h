import React from 'react';

class UserFilter extends React.Component{
    constructor(props){
        super(props);
        this.paintLocationItem = this.paintLocationItem.bind(this);
        this.paintLocationList = this.paintLocationList.bind(this);
        this.getCities = this.getCities.bind(this);
        this.selectCities = this.selectCities.bind(this);
        this.selectSex = this.selectSex.bind(this);
    }

    getCities(){
        const userData = this.props.users;

        if (userData !== ''){
            const allCities = userData.map(user => user.location.city);
            return allCities.filter((city, index) => allCities.indexOf(city) === index);  
        }
     
    }

    paintLocationItem(city){
        return(
            <li key={city} className="location-item">
                <input type="checkbox" id={city} value={city} checked={this.props.cities.includes(city)} onChange={this.selectCities}></input>
                <label htmlFor={city}>{city}</label>
            </li>
        )
    }

    paintLocationList(){
        const userCities = this.getCities();

        if (userCities !== undefined){
            const cities = userCities.map(city => this.paintLocationItem(city));
        return cities;
        }
    }

    selectCities(event){
        const target = event.target;
        const value = target.value;

        this.props.selectCities(value);
    }

    selectSex(event){
        const target = event.target;
        const value = target.value;

        this.props.selectSex(value);
    }

    render(){
        return(
            <div>
                <form action="" method="POST">
                    <h3>Filter users by:</h3>
                    <h4>Sex</h4>
                    <div className="sex">
                        <input type="radio" value="female" id="female" name="sex" onChange={this.selectSex}></input>
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="sex">
                        <input type="radio" value="male" id="male" name="sex" onChange={this.selectSex}></input>
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="sex">
                        <input type="radio" value="any" id="any" name="sex" onChange={this.selectSex}></input>
                        <label htmlFor="any">Any</label>
                    </div>
                    <h4>Location</h4>
                    <ul className="location-list">
                        {this.paintLocationList()}
                    </ul>
                </form>
            </div>
        )
    }
}

export default UserFilter;