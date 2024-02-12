import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/details')
    .then((response) => {
        setJokes(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}, []); // Empty dependency array to run the effect only once


  return (
    <>
         <h1>Hello Details </h1>

          <p>Jokes: {jokes.length}</p>  
       
         {
           jokes.map((joke,index)=>(
                <div key={joke.id}>
                    <h3>{joke.name}</h3>
                    <h3>{joke.age}</h3>

                </div>
           ))
         } 

    </>
  )
}

export default App
