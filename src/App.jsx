
import './assets/scss/styles.scss'

import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContaner/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Carrito from './components/Carrito/Carrito'
import Error404 from './components/pages/Error404/Error404'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import Bio from './components/pages/Bio/Bio'
import Contacto from './components/pages/Contacto/Contacto'


function App() {

  return (
    // Se envuelve con <BrowserRouter> para que pase a usar el ruteo de react-ruter-dom
    <BrowserRouter>

      {/* Se envuelve en el Context Provider los componentes que vayan a ser afectado por él */}
      <CartProvider>
        <div className="flex flex-col min-h-screen">

          {/* Navbar por fuera de <Routes> para que quede fija al cambiar de contenido */}
          <NavBar className="h-[150px]" />

          {/* Envolver los componentes que tienen una ruta específica y configurar su URL */}
          <Routes>
            {/* Home */}
            <Route path="/" element={
              <ItemListContainer greeting="¡Bienvenidos!" subtitle="Tienda online" className="max-h-[calc(100vh-150px)] overflow-auto" />
            } />

            {/* Categoría */}
            <Route path="/categoria/:categoria" element={<ItemListContainer breadcrum="Categoría: " />} />

            {/* Detalle de producto */}
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />

            {/* Carrito */}
            <Route path="/carrito" element={<Carrito />} />

            {/* Checkout */}
            <Route path="/checkout" element={<Checkout />} />

            {/* Otras páginas */}
            <Route path="/bio" element={<Bio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>

        </div>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
