import React from 'react';

const CityImage = props => {

  const cities = {
    '...' : 'https://via.placeholder.com/700x450/ffffff/eaeaea/? text=...',
    'Buenos Aires': 'https://specials-images.forbesimg.com/imageserve/5d8a1f4618444200084e55dc/960x0.jpg?fit=scale',
    'Sidney': 'https://images.clarin.com/2016/09/05/H1-w2_ntVg_1256x620.jpg',
    'Praga': 'https://cdn.anadventurousworld.com/wp-content/uploads/2019/01/where-to-stay-in-prague.jpg',
    'Boston': 'https://www.ef.com.es/sitecore/__/~/media/universal/stage/5x2/destinations/us/boston/boston.jpg',
    'Tokyo': 'https://specials-images.forbesimg.com/imageserve/956015912/960x0.jpg?fit=scale'
  }

  const city = props.city;

  return (
    <div className="city-image">
      <p>Tu destino es viajar a {city}</p>
      <img className="destination-image" src={cities[city]} alt={city}/>
    </div>
  );
    
};

CityImage.defaultProps = {
  city : '...'
};

export default CityImage;