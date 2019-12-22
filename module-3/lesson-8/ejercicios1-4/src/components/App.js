import React from 'react';
import '../stylesheets/App.css';
//import AwesomeForm from './Ejercicio0';
//import Movie from './Ejercicios1-2/Movie';
//EL EJERCICIO 2 NO ESTÁ PORQUE EL 1 LO HICE DIRECTAMENTE CON UNA FUNCIÓN PARA TODOS LOS CAMPOS.
//import Movie from './Ejercicio3/Movie';
//import CustomTextInput from './Ejemplos-teoria/CustomTextInput';
//import FileInput from './Ejemplos-teoria/FileInput';
import Movie from './Ejercicio4/Movie';


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

