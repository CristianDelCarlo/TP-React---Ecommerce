import React, { useState } from 'react';
import { FormularioAlta } from '../FormularioAlta/FormularioAlta';

export default function FormularioAltaContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        imagen: ''
    });
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm, [name]: value
        });
    };
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Enviando los siguientes datos a la API:', datosForm);
    };
    return (
        <FormularioAlta
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
        />
    );
}
