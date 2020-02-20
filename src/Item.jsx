import React from 'react';

const Item = props => {
    //const { nombre, indice } = props;
    const nombre = props.nombre;
    const indice = props.indice;

    return (
        <div style={{
            backgroundColor: indice % 2 === 1 ? 'white' : '#ededee'
        }}>
            <span>{indice}</span>
            <span>{" " + nombre}</span>
        </div>
    );
}

export default Item;