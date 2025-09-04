import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm'
import ArticulosBlog from './components/ArticulosBlog'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Uso de useForm()</h1>
      <SimpleForm />
      <h1>APIs con React y useEffect</h1>
      <ArticulosBlog />
    </>
  )
}

export default App