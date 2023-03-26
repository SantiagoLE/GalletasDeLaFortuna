import React from 'react'
import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'

const Button = ({setPhraseRandom, setNumberBackground}) => {

   const handleChangePhrase = () => {
        setPhraseRandom(getRandomArray(phrases))
        setNumberBackground(getRandomArray([1, 2, 3, 4]))
    }
  return (
    <button className='App_button' onClick={handleChangePhrase}>Prueba tu suerte</button>
  )
}

export default Button