import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <img src="images/photos.png" alt="photos" className="hero--photo"/>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero;