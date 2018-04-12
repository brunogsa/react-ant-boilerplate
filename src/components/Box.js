import React from 'react';

const Box = ({ children, style, className }) => (

  <div className={ `is-box ${style}` } style={ style }>
    { children }
  </div>

);

export default Box;
