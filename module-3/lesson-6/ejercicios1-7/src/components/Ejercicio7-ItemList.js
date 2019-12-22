import React from 'react';
import Item from './Ejercicio7-Item';
import items from './Ejercicio7-ArrayOfItems';
import CategoryButton from './Ejercicio7-CategoryButton';
  
class ItemList extends React.Component {

  constructor(props){
    super(props);
    this.categoryItems = items;
    this.paintItem = this.paintItem.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  getCategory(myCategory){
   this.categoryItems = items.filter(item=>item.category===myCategory);
   this.forceUpdate();
  }
  
  paintItem(item){
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

  render() {
    return (
      <div>
        <CategoryButton 
          category='Bebida'
          getCategory={this.getCategory}
        />
        <ul className="item-list">
            {this.categoryItems.map(this.paintItem)}
        </ul>
      </div>
    );
  }
}

export default ItemList;
  
 