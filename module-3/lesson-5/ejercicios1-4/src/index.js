import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import ItemList from './components/ItemList';
import items from './components/ArrayOfItems';
import HalfPage from './components-ej2/HalfPage';

//Ejercicios 1, 3:
ReactDOM.render(<ItemList items={items} />, document.getElementById('root'));

//Ejercicio 2:
// ReactDOM.render(
//     <div className="half-container">
//         <HalfPage styling="lightcoral">
//             <h1>Una mitad</h1>
//             <p>son dos</p>
//         </HalfPage>
//         <HalfPage styling="lightpink">
//             <h1>y otra mitad</h1>
//             <p>mitades</p>
//         </HalfPage>
//     </div>,
// document.getElementById('root'));