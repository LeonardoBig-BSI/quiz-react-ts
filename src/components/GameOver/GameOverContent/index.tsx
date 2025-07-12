import { useContext } from 'react';
import { QuizContext } from '../../../contexts/quiz';

import WellDone from '../../../img/welldone.svg';
import { Button } from "../../Button";

const GameOverContent = () => {
    const quizContext = useContext(QuizContext);

    if (!quizContext) {
        throw new Error("QuizContext não foi fornecido.");
    }

    const { state: quizState, dispatch } = quizContext;

    console.log(quizState);

    if (!quizContext) {
        throw new Error("QuizContext não foi fornecido.");
    }

    console.log(quizState);

    return (
        <>
            <h2 className="my-2 text-2xl font-bold">
                Fim de Jogo!
            </h2>
            <p className="my-2 text-colorParagraph">
                Pontuação: {quizState.score}
            </p>
            <p className="my-2 text-colorParagraph">
                Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.
            </p>

            <img
                src={WellDone}
                alt="Fim do Quiz"
                className="my-8 h-[200px]"
            />

            <Button.Root
                onClick={() => dispatch({ type: "NEW_GAME" })}
                className="mt-4 text-base md:text-md px-20 py-3 rounded-full cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                           hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]"
            >
                <Button.Content 
                    text="Reiniciar" 
                    className="text-base md:text-2xl lg:text-2xl text-zinc-100 font-bold"
                />
            </Button.Root>
        </>
    )
}

export default GameOverContent