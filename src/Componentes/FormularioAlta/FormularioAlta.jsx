import React from 'react';
import styles from './FormularioAlta.module.css'

export function FormularioAlta({ datosForm, manejarCambio, manejarEnvio }) {


    return (
        <form onSubmit={manejarEnvio} >
            <h2>Agregar Nuevo Producto</h2>
            <div>
                <label>Nombre del Producto:  </label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Descripción:</label>

                <textarea
                    placeholder="Ej: Teclado Mecánico marca X de ..."
                    name="descripcion"
                    value={datosForm.descripcion}
                    onChange={manejarCambio}
                    rows={3}
                />
            </div>
            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:  </label>
                <input
                    type="stock"
                    placeholder="Ej: 15"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div className={styles.imagenes}>
                <label>Imagen:</label>

                <label className={styles.botonImagenes}>
                    Seleccionar imagen
                    <input
                        type="file"
                        name="imagen"
                        accept="image/*"
                        onChange={manejarCambio}
                        hidden
                    />
                </label>
            </div>
            <button type="submit">Guardar Producto</button>
        </form >
    );
} 
