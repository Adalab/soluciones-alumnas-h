import React from 'react';
import '../stylesheets/App.css';
import { Link, Route, Switch } from 'react-router-dom';
//import AppEjercicio01 from './Ejercicio1/AppEjercicio01';
//import AppEjemploTeoria from './EjemploTeoria.js/AppEjemploTeoria';
import AppEjercicio02 from './Ejercicio2/AppEjercicio02';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AppEjercicio02/>
      </div>
    );
  }
}

export default App;

