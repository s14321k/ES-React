import './Card.css';
import React, {useEffect} from 'react';

const Card = (props) => {
  const classes = 'card ' + props.className;
  useEffect(() =>
  {
    console.log(__filename.slice(__dirname.length));
  });
  
  return (
    <div className={classes}>{props.children}</div>
        );
}

export default Card;