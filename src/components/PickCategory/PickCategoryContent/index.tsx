import { useContext } from "react";
import { QuizContext } from "../../../contexts/quiz";

import questions from '../../../data/questions_complete';
import Category from '../../../img/category.svg';
import { Button } from "../../Button";

const PickCategoryContent = () => {
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

    const chooseCategoryAndReorderQuestions = (category: string) => {
        dispatch({
            type: 'START_GAME',
            payload: {
                category: category,
            }
        });

        dispatch({ type: 'REORDER_QUESTIONS' });
    }

    return (
        <>
            <h2 className="mb-4 text-2xl font-bol">Escolha uma categoria</h2>
            <p className="mb-6 text-colorParagraph">As perguntas serão referentes a uma das linguagens abaixo:</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
                {questions.map((currQuestion) => (
                    <div key={currQuestion.category}>
                        <Button.Root
                            className='text-base md:text-md px-6 py-3 rounded-full border-none cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                                       hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
                            onClick={() => chooseCategoryAndReorderQuestions(currQuestion.category)}
                        >
                            <Button.Content
                                text={currQuestion.category}
                                className="text-2xl font-bold"
                            />
                        </Button.Root>
                    </div>
                ))}
            </div>

            <img
                src={Category}
                alt="Categoria"
                className="mt-8 max-w-[280px] mx-auto"
            />
        </>
    )
}

export default PickCategoryContent