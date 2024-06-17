import './Inicio.css'
import BarraNavPortafolio from '../../Componentes/001Portafolio/BarraNavPortafolio/BarraNavPortafolio'
import Paginado from '../../Componentes/001Portafolio/PaginadoPortafolio/Paginado'

function Inicio() {

  return (
    <div>
      <header>
        <BarraNavPortafolio />
      </header>
      <main>
        <Paginado/>
      </main>
    </div>
  )
}

export default Inicio