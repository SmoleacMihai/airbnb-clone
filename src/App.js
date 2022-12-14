import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from "./components/Navbar/Navbar"
import data from "./data/data"

const App = () => {

  const cardElements = data.map((object) => {
    return <Card 
      key = {object.id}
      {...object}
    />
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='cards-list'>
        {cardElements}
      </div>
    </>
  );
}

export default App;
