//Importación de los estilos
import '../styles/Cabecera.css'

/*
Creación del componente Cabecera. 
Recibe dos propiedades (cantante, disco) con valores por defecto (Alejandro Sanz, - Más -)
Tiene el nombre del artista y título del álbum en dos líneas
*/

function Cabecera({cantante = 'Alejandro Sanz', disco = ' - Más - ' }){
    return (
        <header> 
            {/* Se utilizan las propiedades cantante y disco */}
            <h1> {cantante}</h1>
            <h2> {disco}</h2>
        </header>        
    )
    
}

// Exportación del componente
export default Cabecera