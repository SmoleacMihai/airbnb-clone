import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from "./components/Navbar/Navbar"
import data from "./data/data"

const App = () => {

  const cardElements = data.map((object) => {
    return <Card 
      img = {object.coverImg}
      rating = {object.stats.rating}
      reviewCount = {object.stats.reviewCount}
      country = {object.stats.location}
      title = {object.title}
      price = {object.price}
    />
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      {cardElements}
    </>
  );
}

export default App;
