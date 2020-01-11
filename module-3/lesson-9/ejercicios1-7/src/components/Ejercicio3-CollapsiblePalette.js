import React from 'react';

const CollapsiblePalette = props =>{

    const colours = props.colours;

    const paintColours = () => colours.map((color, i) => <li className="palette-colour" key={i} style={{backgroundColor: `#${color}`}}></li>);

    return(
        <ul className>
            {paintColours()}
        </ul>
    )
}

export default CollapsiblePalette;