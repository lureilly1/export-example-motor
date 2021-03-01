import React, { useContext } from 'react'
import { EngineContext } from '@motor-js/core'
import Button from './Button'

function App() {

  const { engine } = useContext(EngineContext)

  return (
    <div className="App">
    { engine && <Button engine={engine} /> }
    </div>
  );
}

export default App;
