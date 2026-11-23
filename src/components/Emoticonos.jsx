//Importación de los estilos
import '../styles/Emoticonos.css'

/*
Creación del componente Emoticonos
Tiene un carrusel de emojis, con el central destacado.
*/ 

function Emoticonos(){
    return (
        <div className='emoticonos'>
            <p>{'\u{1F608}'}</p>
            <p>{'\u{1F604}'}</p>
            {/* Contenedor para destacar el emoticono central */}
            <div className='emoticono-seleccionado'>
                <p>{'\u{1F60D}'}</p>
            </div>         
            <p>{'\u{1F614}'}</p>
            <p>{'\u{1F62F}'}</p>
        </div>  
    )
    
}

// Exportación del componente
export default Emoticonos