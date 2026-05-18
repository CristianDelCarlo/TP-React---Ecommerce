import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './Componentes/Layout/Layout';
import Inicio from './Componentes/Inicio/Inicio';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Destacados from './Componentes/Destacados/Destacados';
import FormularioAltaContainer from './Componentes/FormularioAltaContainer/FormularioAltaContainer';
import ProductoDetalle from './Componentes/ProductoDetalle/ProductoDetalle';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Inicio />} />

        <Route
          path="/productos"
          element={<ItemListContainer Mensaje="Todos los productos" />}
          
        />

        <Route
          path="/destacados"
          element={<Destacados Mensaje="Elementos destacados" />}
        />

        <Route
          path="/alta"
          element={<FormularioAltaContainer />}
        />

        <Route path="/productos/:id"
        element={<ProductoDetalle />} />
        
      </Route>
    </Routes>
  );
}

export default App;