import React from 'react';
import Item from './Item';
  
class ItemList extends React.Component {
    render() {

        const paintItem = (item) =>{
           return( 
                <li>
                    <Item 
                    name = {item.name}
                    description= {item.description} 
                    quantity={item.quantity}
                    category={item.category}
                    price={item.price} 
                    />
                </li>
           );
        }

        const cheapItems = this.props.items.filter(item => item.price < 10);
        //en el apartado a) del ejercicio 1 piden mostrar todos los items. Para eso, en return, en lugar de mapear la constante CheapItems, mapeamos directamente this.props.items
      return (
        <ul className="item-list">
            {cheapItems.map(paintItem)}
        </ul>
      );
    }
  }

export default ItemList;
  
 