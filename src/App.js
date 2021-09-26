import { 
  Header, 
  Footer, 
  Inicio, 
  Integrantes, 
  Mision, 
  Vision 
} from './components'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="panel" id="inicio">
          <Inicio />
        </section>
        <section className="panel" id="integrantes">
          <Integrantes />
        </section>
        <section className="panel" id="mision">
          <Mision />
        </section>
        <section className="panel" id="vision">
          <Vision />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
