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
      <div className='Nav'>
        <p>Selected Pokemon : {selectedPoke ? selectedPoke.name : 'None'}  </p>
      </div>
      <div className="searchBar">
        <LiveSearch setSelectedPoke={setSelectedPoke}/>
      </div>
      
      <div className='max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div>
             <h2>1</h2>
          </div>
          <div>
            <h2>1</h2>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
