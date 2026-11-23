//Importación del componente BarraProgreso
import BarraProgreso from './BarraProgreso'
//Importación de los estilos
import '../styles/ControlesReproductor.css'

/*
Creación del componente Reproductor
Tiene controles tipo reproductor: play, pausa, avance, barra de progreso y volumen.
*/

function Reproductor(){
    return (
        <div className='reproductor'> 
            <div className='reproductor-superior'>
                <button className='boton'>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXQKcN6SMJE1I6W9UZlSc8zakmRw_qbti8XEoCd1xwA&s=10'/> 
                </button>
                <BarraProgreso porcentaje = {30}/>
                <button className='boton'>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrzsga_KUfMYsfE_33EB1DdWIh5iq0rCAhpqibqUCwA&s=10'/> 
                </button>
            </div>
            <div className='reproductor-inferior'>
                <BarraProgreso porcentaje = {45}/>
                <button className='boton'>
                    <img src = 'https://cdn-icons-png.flaticon.com/512/2/2392.png'/> 
                </button>
                <button className='boton'>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YEbe9SlhjY8J1TcWsSzPhiHDGJLyVdtd6LrhfoR377dOVJrzgUN0hWs&s=10'/> 
                </button>
                <button className='boton'>
                    <img src = 'https://cdn-icons-png.flaticon.com/512/0/304.png'/> 
                </button>
                <button className='boton'>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrzsga_KUfMYsfE_33EB1DdWIh5iq0rCAhpqibqUCwA&s=10'/> 
                </button>
            </div>
        </div>    
        
    )
    
}

// Exportación del componente
export default Reproductor