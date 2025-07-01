import Quiz from '../../img/quiz.svg';
import Button from '../Button/Button';

const Welcome = () => {
  return (
    <div className='max-w-[500px] text-center'>
      <h2 className='mb-4 text-lg md:text-2xl lg:text-2xl'>Seja bem-vindo</h2>
      <p className='mb-4 text-colorParagraph'>Clique no botão para começar:</p>
      <Button
        type='button'
        className='text-base lg:text-lg xl:text-xl px-8 py-4 rounded-xl  border-none cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                   hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
      >
        Iniciar
      </Button>

      <img
        src={Quiz}
        alt="Início do Quiz"
        className='mt-20 md:mt-4'
      />
    </div>
  )
}

export default Welcome