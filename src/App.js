import React,{useState} from 'react';
import './App.css';
import data from'./data'
import Tours from './tours';


const App= ()=>{
  const [tours,setTours]=useState(data)
  

  function removeTour(id) {
    const newTours=tours.filter(tour=>tour.id !== id );
    setTours(newTours);
  }


  if(tours.length ===0)
  {
    return(
      <div>
        <h2>No tours left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
  <div className="app">
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
  );
}

export default App;
