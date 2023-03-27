import React from 'react'

const phrase = ({phraseRandom}) => {

  return (
    <div className='App_containt-phrase'>
      <p className='App_phrase'>{phraseRandom.phrase} <span></span> </p> 
   </div>
    
  )
}

export default phrase