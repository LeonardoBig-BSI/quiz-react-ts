import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import { Button } from "../Button";

const Question = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext não foi fornecido.");
  }

  const { state: quizState, dispatch } = quizContext;

  console.log(quizState);

  if (!quizContext) {
    throw new Error("QuizContext não foi fornecido.");
  }

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div className="text-center max-w-[300px] md:max-w-[500px] bg-colorBackground rounded-md p-8">
      <p className="mb-4">
        Pergunta de {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>

      <h2 className="mb-8 text-2xl font-bold">
        {currentQuestion.question}
      </h2>

      <div>
        <p>Opções</p>
      </div>

      <Button.Root
        onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        className="mt-4 text-base md:text-md px-6 py-3 rounded-full border-2 border-white cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                   hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]"
      >
        <Button.Content text="Continuar" />
      </Button.Root>
    </div>
  )
}

export default Question