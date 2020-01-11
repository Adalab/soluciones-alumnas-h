import React from 'react';
import '../stylesheets/App.css';
//import Numbers from './Ejercicio1';
//import Collapsibles from './Ejercicio2';
//import Collapsibles from './Ejercicio3-Collapsibles';
//import BroomRace from './Ejercicios4-5';
import Movie from './Ejercicios6-7/Movie';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Movie/>
      </div>
    );
  }
}

export default App;

