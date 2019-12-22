import React from 'react';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);
        this.getCategory = this.getCategory.bind(this);
    }

    getCategory(){
        const category = this.props.category;
        this.props.getCategory(category);
        this.forceUpdate();
    }

    render() {

        return(
            <button type="button" onClick={this.getCategory}>{this.props.category}</button>
        )
    }
}

export default CategoryButton;