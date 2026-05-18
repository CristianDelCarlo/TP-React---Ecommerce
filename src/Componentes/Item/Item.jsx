import { useState } from "react";
import styles from './Item.module.css'
import { Link } from 'react-router-dom';

export function Item({ id, nombre, precio, stock, imagen }) {
    const [esFavorito, setEsFavorito] = useState(false)

    const [cantidad, setCantidad] = useState(1);
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    }
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }


    return (
        <div className={styles.item} >

            <Link to={`/productos/${id}`}>
                <h3>{nombre}</h3>
            </Link>

            <img
                src={imagen}
                alt={nombre}
                width="150"
                height="150"
            />

            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>



            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            <span onClick={marcarComoFavorito}>
                {esFavorito ? "⭐" : "☆"}
            </span>
            <div className={styles.cantidadContenedor} >
                <p>Cantidad: </p>
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>

        </div>
    );
}
