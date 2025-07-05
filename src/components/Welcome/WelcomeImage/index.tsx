import Quiz from '../../../img/quiz.svg';

const WelcomeImage = () => {
  return (
    <img
        src={Quiz}
        alt="Início do Quiz"
        className='mt-20 md:mt-4 w-[500px]'
      />
  )
}

export default WelcomeImage