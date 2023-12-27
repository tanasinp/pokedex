import React, { useState } from 'react';
import './App.css'
import { useGetAllPokemonQuery, } from './services/pokemon' 

//import components
import Header from "./components/Header";
import LiveSearch from './components/LiveSearch';

function App() {
  const { data, error, isLoading } = useGetAllPokemonQuery() 
  const [selectedPoke, setSelectedPoke] = useState(null);

  if (error) {
    return <>Oh no, there was an error: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <div className="AppHeader flex items-center justify-center">
        <Header/>
      </div>
      <div>
        <p>Selected Pokemon : {selectedPoke ? selectedPoke.name : 'None'}  </p>
      </div>
      <div>
        <LiveSearch setSelectedPoke={setSelectedPoke}/>
      </div>
    </div>
  )
}

export default App
