import React from 'react';
import palettes from '../data/palettes.json'

////////// ¡¡POR QUÉ SÓLO FUNCIONA CUANDO HACES CLICK ENTRE EL TÍTULO Y LA FLECHA!!

class Collapsibles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: ''
        };
        this.setOpen = this.setOpen.bind(this);
        this.paintData = this.paintData.bind(this);
        this.getData = this.getData.bind(this);
    }

    paintData(data){
        return(
            <li key={data.name}>
                <div className="collapsible-top" id={data.name} onClick={this.setOpen}>
                    <h2>{data.name}</h2>
                    <span>⌄</span>
                </div>
                <p className={this.state.open === data.name ? '' : 'hidden'}>{data.from}</p>
            </li>
        )
    }

    getData(){
        const paintedData = palettes.palettes
        .map(palette => this.paintData(palette));

        return paintedData;
    }

    setOpen(event){
        if(this.state.open === event.target.id){
            this.setState({
                open: ''
            })
        } else {
            this.setState({
                open: event.target.id
            })
        }
    }

    render() {

        return(
            <ul>
                {this.getData()}
            </ul>

        )
    }
}

export default Collapsibles;