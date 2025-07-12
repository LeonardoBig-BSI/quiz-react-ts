// import { useContext } from "react";
// import { QuizContext } from "../../contexts/quiz";

import GameOverContent from "./GameOverContent";
import GameOverRoot from "./GameOverRoot";

// import WellDone from '../../img/welldone.svg';
// import { Button } from "../Button";

// const GameOver = () => {
//     const quizContext = useContext(QuizContext);

//     if (!quizContext) {
//         throw new Error("QuizContext não foi fornecido.");
//     }

//     const { state: quizState, dispatch } = quizContext;

//     console.log(quizState);

//     if (!quizContext) {
//         throw new Error("QuizContext não foi fornecido.");
//     }

//     console.log(quizState);

//     return (
//         <div className="flex flex-col items-center justify-center gap-2">
//             <h2 className="my-2 text-2xl font-bold">
//                 Fim de Jogo!
//             </h2>
//             <p className="my-2 text-colorParagraph">
//                 Pontuação: {quizState.score}
//             </p>
//             <p className="my-2 text-colorParagraph">
//                 Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.
//             </p>

//             <img 
//                 src={WellDone} 
//                 alt="Fim do Quiz"
//                 className="my-8 h-[200px]"
//             />

//             <Button.Root
//                 onClick={() => dispatch({ type: "NEW_GAME" })}
//                 className="mt-4 text-base md:text-md px-20 py-3 rounded-full cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
//                            hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]"
//             >
//                 <Button.Content text="Reiniciar" />
//             </Button.Root>
//         </div>
//     )
// }

// export default GameOver

export const GameOver = {
    Root: GameOverRoot,
    Content: GameOverContent,
}