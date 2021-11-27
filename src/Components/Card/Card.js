import './card.css'

function Card(props) {
  return (
    <div className={`card ${props.class ? props.class : ''}`}>
      {props.children}
    </div>
  )
}

export default Card;