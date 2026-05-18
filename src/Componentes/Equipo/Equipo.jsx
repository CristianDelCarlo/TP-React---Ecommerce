import React, { useState, useEffect } from 'react';
import styles from './Equipo.module.css'

function Equipo({ Mensaje }) {
    const [equipo, setEquipo] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/equipo.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEquipo(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando equipo, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {Mensaje && <h2>{Mensaje}</h2>}
            <div className={styles.contenedorTarjetas}>
                {equipo.map((miembro) => (
                    <div key={miembro.id} className={styles.tarjeta} >
                        <img src={miembro.foto} alt={miembro.nombre} width="150" height="150" style={{ objectFit: 'cover', borderRadius: '50%' }} />
                        <h2>{miembro.nombre}</h2>
                        <p>Cargo: {miembro.cargo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Equipo;