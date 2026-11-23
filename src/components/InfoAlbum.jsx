//Importación de los estilos
import '../styles/InfoAlbum.css'

/*
Creación del componente InfoAlbum. 
Recibe una propiedad (imagen) con un valor por defecto
Tiene la imagen del cantante con bloques que simulan texto descriptivo.
*/ 

function InfoAlbum({imagen = 'https://m.media-amazon.com/images/I/81yh6sxClhL._UF894,1000_QL80_.jpg'}){
    return (
        <div> 
            <div className='info-album'>
                {/* Imagen del cantante, se utiliza la propiedad imagen */}
                <img 
                src={imagen} 
                alt='Foto del álbum' 
                className='imagen-album'/>

                {/* Bloques que simulan líneas de texto con diferentes anchos */}
                <div className='texto-simulado'>
                    <div className='texto texto-80'></div>
                    <div className='texto texto-60'></div>
                    <div className='texto texto-90'></div>
                    <div className='texto texto-70'></div>
                </div>
                
            </div>
            
        </div>        
    )
    
}

// Exportación del componente
export default InfoAlbum