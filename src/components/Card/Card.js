const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
 return ( 
  <div className="card">
      { badgeText && <div className="card--badge">{badgeText}</div>}  
      <img src={props.coverImg} className="card--image" alt="a" />
      <div className="card--stats">
          <img src="images/star.png" className="card--star" alt="a"/>
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
  </div>
 )
}

export default Card;