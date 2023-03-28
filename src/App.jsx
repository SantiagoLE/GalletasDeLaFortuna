import './App.css'
import phrases from './utils/phrases.json'
import Button from './components/Button';
import Phrase from './components/Phrase';
import Fuente from './components/Fuente';
import getRandomArray from './utils/getRandomArray';
import { useState } from 'react';



const backgrounds = [1, 2, 3, 4]

function App() {
  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(phrases)
  )
const [numberBackground, setNumberBackground] = useState(getRandomArray(backgrounds))

  const appStyle = {
    backgroundImage: `url('/backgrounds/background${numberBackground}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
      <h1 className='App_title'>GALLETAS DE LA <br /> FORTUNA</h1>
      <Phrase phraseRandom={phraseRandom}/>
      <Button 
      setPhraseRandom={setPhraseRandom}
      setNumberBackground={setNumberBackground}
      />
      <Fuente phraseRandom={phraseRandom}/>
    </div>
  )
}

export default App
