import { useState, useEffect} from 'react';
import './App.css';
import { getData } from './services/sw-api'
import StarshipCard from './StarShipCard'

export default function App() {
  const [starship, setStarship] = useState([]);
  const [nextUrl, setURL] = useState('https://swapi.dev/api/starships/');
  const [clicked, setClicked] = useState(false);
  
  //run on load
  useEffect(() => {
    if(nextUrl) 
    {
      getData(nextUrl)
        .then((res) => {
          // getNext(res)
          setURL(res.next)
          setStarship(res.results)}
        )
    }
  }, [clicked]);

  function handleClick(){
    console.log(nextUrl)
    setClicked(true)
    getData(nextUrl)
  }
    
  // console.log(starship)
  return (
    <div className='container'>
      <div className='header'>
        <h1 id='header'>Star Wars Starships</h1>
      </div>
      <div className='app'>
        {    
          starship.map((e, i) => {
            return(
              <StarshipCard name={e.name} url={e.url} key = {i}/>
            )}
          )
        }
      </div>
        <button id='buttonB' onClick={handleClick}>NEXT</button>
    </div>
  );
}