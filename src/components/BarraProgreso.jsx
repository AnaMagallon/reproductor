//Importación de los estilos
import '../styles/BarraProgreso.css' 

/*
Creación del componente BarraProgreso. 
Recibe una propiedad (porcentaje) con un valor por defecto (50).
Simula una barra de progreso con una barra de fondo y otra encima que representa el porcentaje de progreso.
*/

function BarraProgreso({porcentaje = 50}){
    return (
        <div className='barra-fondo'> {/* Barra de fondo */}
            {/* Barra del porcentaje de progreso. Se utiliza la propiedad porcentaje */}
            <div className='barra-progreso' style={{ width: `${porcentaje}%` }}></div>
        </div>    
    )
    
}

// Exportación del componente
export default BarraProgreso