import { useContext, useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Welcome } from './components/Welcome'
import { QuizContext } from './contexts/quiz'
import Question from './components/Question'

function App() {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext não foi fornecido.");
  }

  const { state: quizState, dispatch } = quizContext;

  // console.log(quizState);

  useEffect(() => {
    //embaralhar as perguntas
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center text-center pt-12'>
      <h1 className='mb-8 text-3xl font-bold'>Quiz de Programação</h1>

      {quizState.gameStage === 'Start' && (
        <Welcome.Root>
          <Welcome.Content>
            <Welcome.Title title='Seja bem-vindo' />
            <Welcome.Text text='Clique no botão para começar:' />

            <Button.Root
              className='text-base lg:text-lg xl:text-xl px-8 py-4 rounded-full  border-none cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                   hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
              
              onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
              <Button.Content
                text='Iniciar'
              />
            </Button.Root>

            <Welcome.Image />

          </Welcome.Content>
        </Welcome.Root>
      )}

      {quizState.gameStage === 'Playing' && <Question />}

    </div>
  )
}

export default App
