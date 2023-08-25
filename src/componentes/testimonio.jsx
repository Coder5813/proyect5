import React from 'react';
import '../stylesheet/testimonio.css'

function Testimonio(props) {
    return (
     <div className='contenedor-testimonio'>
        <img 
         className='imagen-testimonio' 
         src={require(`../imagenes/testimonio-${props.imagen}.png`)}
         alt='foto de 1'/>
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
                <strong>{props.nombre}</strong> in {props.pais}</p>
            <p className='cargo-testimonio'>
                {props.cargo} at <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>

        </div>
    
     </div>

    );
};


export default Testimonio;