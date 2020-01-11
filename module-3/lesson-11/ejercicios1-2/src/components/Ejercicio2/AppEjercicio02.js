import React from 'react';
import '../../stylesheets/App.css';
import {fetchResults}  from './services/ResultsService';
import { Link, Route, Switch } from 'react-router-dom';
import UserPage from './UserPage';
import UserDetails from './UserDetails';


class AppEjercicio02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userResults: '',
      cities: [],
      sex: 'any',
      selectedUser: '',
      userDetails: ''
    };
    this.fetchNewResults = this.fetchNewResults.bind(this);
    this.selectCities = this.selectCities.bind(this);
    this.selectSex = this.selectSex.bind(this);
    // this.selectUser = this.selectUser.bind(this);
    // this.getSelectedUser = this.getSelectedUser.bind(this);
    this.renderUserDetails = this.renderUserDetails.bind(this);
  }

  fetchNewResults() {
    fetchResults()
      .then(data => {
        this.setState({
          userResults: data.results,
        });
    });
  }

  componentDidMount(){
    this.fetchNewResults();
  }

  selectCities(value){
    const cityIndex = this.state.cities.indexOf(value);
    const prevCities = this.state.cities;

    if(cityIndex < 0){
      this.setState(prevState =>{
        return {
          cities: [...prevState.cities, value]
        };
      });
    } else {
      prevCities.splice(cityIndex, 1);

      this.setState({
        cities: [ ...prevCities]
      });
    };
  };

  selectSex(value){
    if(value === 'female'){
      this.setState({
        sex: 'female'
      })
    } else if(value === 'male'){
      this.setState({
        sex: 'male'
      })
    } else {
      this.setState({
        sex: 'any'
      })
    }
  }

  renderUserDetails(props){
    const userId = props.match.params.id;
    const user = this.state.userResults.find(user => user.login.uuid === userId);
    console.log(user);
    return(
      <UserDetails
        user={user}
      />
    )
  }

  render() {
    console.log(this.state.userResults);
    return (
      <div className="App">

        <Switch>
            <Route
                exact path="/"
                render={routerProps => (
                  <UserPage 
                    users={this.state.userResults}
                    selectCities={this.selectCities}
                    cities={this.state.cities}
                    selectSex={this.selectSex}
                    sex={this.state.sex} 
                  />
                )}
            />
            <Route
                path="/user/:id"
                render={this.renderUserDetails}
            />
        </Switch>
      </div>
    );
  }
}

export default AppEjercicio02;

