//Importación de los estilos, los datos de los cantantes y los diferentes componentes creados
import './App.css'
import { cantantes } from './data/datosCantante';
import Cabecera from './components/Cabecera.jsx'
import BarraProgreso from './components/BarraProgreso.jsx';
import InfoAlbum from './components/InfoAlbum.jsx'
import Reproductor from './components/ControlesReproductor.jsx';
import CasillasSeleccionables from './components/CasillasSeleccionables.jsx';
import Busqueda from './components/Busqueda.jsx';
import Emoticonos from './components/Emoticonos.jsx';
import BarraInferior from './components/BarraInferior.jsx';

/*
Creación del componente principal App
 */

function App() {
  //Con la siguiente constante se hace el cambio de cantante
  const cantante = cantantes.alejandro;

  return (
    <div className='app'> 
      <Cabecera cantante={cantante.cantante} disco={cantante.disco} />
      <BarraProgreso porcentaje={50}/>
      <InfoAlbum imagen={cantante.imagen}/>
      <Reproductor/>
      <CasillasSeleccionables/>
      <Busqueda cantante={cantante.busqueda}/>
      <Emoticonos/>
      <BarraInferior/>
    </div>
  )
}

//Exportación del componente App
export default App
