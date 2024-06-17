import { Route, Routes } from 'react-router-dom'
import Inicio from './views/000Inicio/Inicio'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path = '/' element = {<Inicio/>} />
      </Routes>
    </div>
  )
}

export default App
