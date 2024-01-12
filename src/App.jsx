
import './assets/scss/styles.scss'

import NavBar from './components/NavBar/NavBar'
import Error404 from './components/Error404/Error404'
import ItemDetailContainer from './components/ItemDetailContaner/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    // Se envuelve con <BrowserRouter> para que pase a usar el ruteo de react-ruter-dom
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        {/* Navbar por fuera de <Routes> para que quede fija al cambiar de contenido */}
        <NavBar className="h-[150px]" />

        {/* Envolver los componentes que tienen una ruta específica y configurar su URL */}
        <Routes>
          {/* Home */}
          <Route path="/" element={
            <ItemListContainer greeting="¡Bienvenidos!" subtitle="Tienda online" className="max-h-[calc(100vh-150px)] overflow-auto" />
          } />
          {/* Filtrado categoría */}
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Categoría: " />} />
          {/* Detalle de producto */}
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          {/* Error 404 */}
          <Route path="*" element={<Error404 />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
