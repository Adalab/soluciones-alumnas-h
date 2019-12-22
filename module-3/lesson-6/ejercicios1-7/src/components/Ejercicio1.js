import React from 'react';
import { createSecureContext } from 'tls';
//import PropTypes from 'prop-types';

const hateOnion = event =>{
  if(event.target.value.includes('cebolla')){
    alert('ODIO LA CEBOLLA.');
  }
}

const OnionHater = () => {
  return (
    <div className="text-area">
      <textarea onChange={hateOnion}></textarea>
    </div>
  );
    
};

export default OnionHater;