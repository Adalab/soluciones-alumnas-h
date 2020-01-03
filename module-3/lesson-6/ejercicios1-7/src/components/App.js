import React from 'react';
import '../stylesheets/App.css';
//import OnionHater from './Ejercicio1';
//import Destiny from './Ejercicio2';
//import RandomMurray from './Ejercicio2ymedio';
//import OnionHater from './Ejercicio3';
//import Destiny from './Ejercicio4-Destiny';
//import CityImage from './Ejercicio4-CityImage';
//import MurrayList from './Ejercicio4ymedio-MurrayList';
//import Destiny from './Ejercicio5-Destiny';
//import Translate from './Ejercicio6-Translate';
import ItemList from './Ejercicio7-ItemList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;

