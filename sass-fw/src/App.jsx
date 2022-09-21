import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="cuadritos">
          <div className="cuadro rojo">
            <h1>Soy el cuadro rojo</h1>
          </div>
          <div className="cuadro azul">
            <h1>Soy el cuadro azul</h1>
          </div>
          <div className="cuadro verde">
            <h2>Soy el cuadro verde</h2>
          </div>
      </div>
      <div className="cuadro rojo">
        <p className="texto-rojo">Soy hijo ilegitimo</p>
      </div>
    </div>
  )
}

export default App
