//Importación de los estilos
import '../styles/CasillasSeleccionables.css'
//Importación de useEffect y useRef de React para marcar el estado indeterminado de los checkbox
import { useEffect, useRef } from 'react';

/*
Creación del componente CasillasSeleccionables
Muestra dos columnas con los tres estados visuales de un checkbox: not selected, selected, indeterminate
*/
function CasillasSeleccionables() {
    // Variables para poder asignar la propiedad indeterminate. Inicialmente null porque inicialmente la pantalla no se ha cargado
    const indeterminado1 = useRef(null);
    const indeterminado2 = useRef(null);

    // Cambia el estado a indeterminado cuando se carga el componente en pantalla
    useEffect(() => {
        if (indeterminado1.current) {
            indeterminado1.current.indeterminate = true;
        }
        if (indeterminado2.current) {
            indeterminado2.current.indeterminate = true;
        }
    }, []);

    return (
        <div>
            {/* Contenedor con las dos columnas */}
            <div className='casillas'>
                {/* Columna con los estados visuales del checkbox */}
                <div className='columna-casillas'>
                    <label>
                        <input type='checkbox'  defaultChecked={false} />
                        not selected
                    </label>
                    <label>
                        <input type='checkbox'  defaultChecked={true} />
                        selected
                    </label>
                    <label>
                        <input type='checkbox'  ref={indeterminado1} />
                        indeterminate
                    </label>
                </div>
                {/* Columna con los estados visuales del checkbox */}
                <div className='columna-casillas'>
                    <label>
                        <input type='checkbox'  defaultChecked={false} />
                        not selected
                    </label>
                    <label>
                        <input type='checkbox'  defaultChecked={true} />
                        selected
                    </label>
                    <label>
                        <input type='checkbox'  ref={indeterminado2}  />
                        indeterminate
                    </label>
                </div>
            </div>
        </div>
        
    )
    
}

// Exportación del componente
export default CasillasSeleccionables