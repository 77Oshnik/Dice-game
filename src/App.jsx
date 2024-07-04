import React, { useState } from 'react'
import Startgame from './components/Startgame'
import Gameplay from './components/Gameplay'

const App = () => {
    const[isGameStarted,setIsGameStarted]=useState(false)
     
    const toggleGamePlay=()=>{
        setIsGameStarted((prev) => !prev)
    }

  return (
    <>
    {
        isGameStarted?<Gameplay/> : <Startgame toggle= {toggleGamePlay}/>
    }
    </>
  )
}

export default App
