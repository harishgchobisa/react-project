import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className={`card ${props.class ? props.class : ''}`}>
      {props.children}
    </div>
  )
}

export default Card;