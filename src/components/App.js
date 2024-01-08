// App.js
import React, { useState } from 'react';
import Galeria from './Galeria';
import '../App.css'

const importImages = (context) => context.keys().map(context);
const images = importImages(require.context('../assets/', false, /\.(jpg)$/));

const imagenes = images.map((url) => ({ url }));

const App = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    };

    return (
        <div className={`App ${modoOscuro ? 'modo-oscuro' : ''}`}>
            <h1>Galería de Imágenes</h1>
            <div className="galeria-container">
                <Galeria imagenes={imagenes} />
            </div>
            <button className={`modo-boton ${modoOscuro ? 'modo-oscuro' : ''}`} onClick={cambiarModo}>
                {modoOscuro ? <i className="fas fa-moon" ></i> : <i className="fas fa-sun"></i>}
            </button>
        </div>
    );
};

export default App;