import './App.css'
import { Button } from './components/Button'
import { Welcome } from './components/Welcome'

function App() {
  return (
   <div className='flex flex-col justify-center items-center text-center pt-12'>
    <h1 className='mb-8 text-3xl font-bold'>Quiz de Programação</h1>

    <Welcome.Root>
      <Welcome.Content>
        <Welcome.Title title='Seja bem-vindo' />
        <Welcome.Text text='Clique no botão para começar:' />

        <Button.Root>
          <Button.Content text='Iniciar' />
        </Button.Root>

        <Welcome.Image />

      </Welcome.Content>
    </Welcome.Root>

   </div>
  )
}

export default App
