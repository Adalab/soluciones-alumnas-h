'use strict';



function validatorBox(borderBox, width, padding, borderSize) {

    /**
     * contnido = width + padding;
     * total = contenido + boderBox es falso añadimos borderSize y sino será igual al contenido
     * return `contenido : X px, cotenido total Y px;`  */


    let totalWidht = width + padding;

    if (borderBox === false) {
        totalWidht = width + padding + borderSize;
        console.log(totalWidht);
    }



    return `El ancho del contenido es: ${width} px y el ancho total de la caja es: ${totalWidht}px.`;
}

const validatorBoxResult = validatorBox(true, 30, 35, 4);

console.log(validatorBoxResult);


/*function xx(a, b, c, d) {
    return 'holauqetal';
}*/