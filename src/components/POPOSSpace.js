import logo from '../logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div className="space">
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <div>{address}</div>
      <div>{props.hours}</div>
      <div>Likes: {props.likes}</div>
    </div>
  )
}

export default POPOSSpace
