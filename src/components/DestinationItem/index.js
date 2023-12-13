import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list-container">
      <div className="image-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name.toLowerCase()}</p>
      </div>
    </li>
  )
}

export default DestinationItem
