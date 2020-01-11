import React from 'react';

class Child extends React.Component {
    render() {
    return <p className="center">This is child number {this.props.match.params.id} {this.props.babyemoji}</p>;
    }
}

export default Child;