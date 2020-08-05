import React from 'react';
import classnames from 'classnames';

const Card = ({ name, number, className, onClick }) => {
  return (
    <p className={classnames(`card ${name}`, className)} onClick={onClick}>
      <span>{number ? number : 'no data'}</span> {name.replace('-', ' ')}
    </p>
  );
};

export default Card;
