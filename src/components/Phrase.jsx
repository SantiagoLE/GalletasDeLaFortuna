import React from 'react'

const phrase = ({phraseRandom}) => {

  return (
    <div className='App_containt-phrase'>
      <p className='App_phrase'>{phraseRandom.phrase} <span></span> </p> 
      <img className='App_phrase-comillas' src="/backgrounds/comillas.png" alt="comillas" />
   </div>
    
  )
}

export default phrase