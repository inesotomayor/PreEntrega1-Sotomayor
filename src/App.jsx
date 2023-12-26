
import './assets/scss/styles.scss'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/header/NavBar'

function App() {

  return (
    <div className="d-flex flex-column">
      <NavBar className="h-[150px]" />
      <ItemListContainer greeting="¡Bienvenidos!" subtitle="Lorem ipsum" className="max-h-[calc(100vh-150px)] overflow-auto" />
    </div>
  )
}

export default App
