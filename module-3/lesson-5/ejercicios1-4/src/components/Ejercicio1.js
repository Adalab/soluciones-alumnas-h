import React from 'react';
import Item from './Item';

//No sé a qué se refiere al principio del enunciado del ejercicio 1, pero por si es esto:

class ItemList extends React.Component {
    render() {
      return (
        <ul className="item-list">
          <li>
            <Item 
              name="Cereales con chocolate" 
              description="Cereales rellenos de chocolate" 
              quantity={2}
              category="Cereales" 
              price={5} 
            />
          </li>
          <li>
            <Item 
              name="Hamburguesa con queso" 
              description="Hamburguesa rica y saludable" 
              quantity={1}
              category="Fast-food" 
              price={15}
            />
          </li>
          <li>
            <Item 
              name="Agua mineral" 
              description="Agua de un charco del Himalaya" 
              quantity={2}
              category="Bebida" 
              price={5}
            />
          </li>
          <li>
            <Item 
              name="Uvas negras" 
              description="Uvas negras de Teruel" 
              quantity={1}
              category="Fruta" 
              price={10}
            />
          </li>
        </ul>
      );
    }
  }

  
 