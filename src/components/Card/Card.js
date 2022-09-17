const Card = (props) => {
    console.log(props);
 return (
  <div className="card">
      <img src={props.img} className="card--image" alt="a" />
      <div className="card--stats">
          <img src="images/star.png" className="card--star" alt="a"/>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
  </div>
 )
}

export default Card;