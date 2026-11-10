import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Guitgar from './components/Guitgar'

function App() {
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
<div className="row mt-5">
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
<Guitgar />
</div>
</main>
      <Footer />
    </>
  )
}

export default App
