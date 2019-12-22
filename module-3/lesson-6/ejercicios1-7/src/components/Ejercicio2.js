import React from 'react';

const alertDestination = event =>{
    alert(`Tu destino es viajar a ${event.target.value}`)
}

const Destiny = () => {
  return (
    <select onChange={alertDestination}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokyo">Tokyo</option>
    </select>
  );
    
};

export default Destiny;