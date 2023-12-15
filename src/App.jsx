
import './assets/scss/styles.scss'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="min-h-screen d-flex flex-column">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos!" subtitle="Lorem ipsum" />
    </div>
  )
}

export default App
