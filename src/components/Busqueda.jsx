//Importación de los estilos
import '../styles/Busqueda.css'

/*
Creación del componente Busqueda. 
Recibe una propiedad (cantante) con un valor por defecto (Alejandro Sanz)
Simula una barra de búsqueda
*/

function Busqueda({cantante = 'Alejandro Sanz'}){
    return (
        <div className='busqueda'>
            <img src='https://cdn-icons-png.flaticon.com/512/2311/2311526.png'/>
            {/* Se utiliza la propiedad cantante */}
            <p>{cantante}</p>
        </div>  
    )
    
}

// Exportación del componente
export default Busqueda