import React from 'react';

const Icon = ({iconId}) => (
  <img
    src={`http://openweathermap.org/img/wn/${iconId}@2x.png` }
    alt=""
    height="300"
    width="300"
  />
  // <i className={`owf owf-${iconId}`} />
);
  
export default Icon;