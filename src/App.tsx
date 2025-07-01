import './App.css'
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
   <div className='flex flex-col justify-center items-center text-center pt-12'>
    <h1 className='mb-8 text-3xl font-bold'>Quiz de Programação</h1>

    <Welcome />
   </div>
  )
}

export default App
