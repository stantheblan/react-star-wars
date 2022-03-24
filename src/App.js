import { useState, useEffect} from 'react';
import './App.css';
import { getData } from './services/sw-api'
import StarshipCard from './StarShipCard'

export default function App() {
  const [starship, setStarship] = useState([]);
  const allShips = [] //array
  //run on load
  useEffect(() => {
    getData()
      .then(res => setStarship(res.results))
      // .then(res => console.log(res.next))
    }, []);
    
  console.log(starship)
  return (
    <div className='container'>
      <div className='header'>
        <h1 id='header'>Star Wars Starships</h1>
      </div>
      {    
        starship.map((e, i) => {
          return(
            <StarshipCard name={e.name} key = {i}/>
          )}
        )
      }
    </div>
  );
}