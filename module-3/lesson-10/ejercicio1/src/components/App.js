import React from 'react';
import '../stylesheets/App.css';
import {fetchResults}  from './services/ResultsService';
import UserList from './UserList';
import UserFilter from './UserFilter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userResults: '',
      cities: [],
      sex: 'any'
    };
    this.fetchNewResults = this.fetchNewResults.bind(this);
    this.selectCities = this.selectCities.bind(this);
    this.selectSex = this.selectSex.bind(this);
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

  render() {
    return (
      <div className="App">
        <UserFilter
          users={this.state.userResults}
          selectCities={this.selectCities}
          cities={this.state.cities}
          selectSex={this.selectSex}
        />
        <UserList
          users={this.state.userResults}
          cities={this.state.cities}
          sex={this.state.sex}
        />
      </div>
    );
  }
}

export default App;

