// Galeria.js
import React, { useState } from 'react';
import Imagen from './Imagen';
import '../style/Galeria.css';

const Galeria = ({ imagenes }) => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const handleClick = (url) => {
        setImagenSeleccionada(url);
    };

    const handleClose = () => {
        setImagenSeleccionada(null);
    };

    return (
        <div className="galeria">
            {imagenes.map((imagen, index) => (
                <div
                    key={index}
                    className={`imagen-container ${imagenSeleccionada === imagen.url ? 'seleccionada' : ''
                        }`}
                    onClick={() => handleClick(imagen.url)}
                >
                    <Imagen url={imagen.url} />
                </div>
            ))}

            {imagenSeleccionada && (
                <div
                    className={`ventana-emergente ${imagenSeleccionada ? 'mostrar' : ''}`}
                    onClick={handleClose}
                >
                    <Imagen url={imagenSeleccionada} />
                </div>
            )}
        </div>
    );
};

export default Galeria;