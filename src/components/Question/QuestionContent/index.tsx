import { useContext } from "react";
import { Button } from "../../Button"
import { QuizContext } from "../../../contexts/quiz";
import { OptionAnswer } from "../../OptionAnswer";

const QuestionContent = () => {
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

    const onSelectOption = (option: string) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                answer: currentQuestion.answer,
                option
            },
        });
    }

    return (
        <>
            <p className="mb-4">
                Pergunta de {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>

            <h2 className="mb-8 text-2xl font-bold">
                {currentQuestion.question}
            </h2>

            <div>
                {currentQuestion.options.map((currOp) => (
                    <div key={currOp} className="flex flex-col gap-2">
                        <OptionAnswer.Root>
                            <OptionAnswer.Content
                                option={currOp}
                                answer={currentQuestion.answer}
                                selectOption={() => onSelectOption(currOp)}
                                hide={quizState.optionToHide === currOp ? "hidden" : ""}
                            />
                        </OptionAnswer.Root>
                    </div>
                ))}
            </div>

            {!quizState.answerSelected && quizState.helpTip === '' && quizState.optionToHide === '' && (
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    {currentQuestion.tip && (
                        <Button.Root
                            className='mt-4 text-base md:text-md px-6 py-3 rounded-full border border-white cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                                       hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
                            onClick={() => dispatch({ type: 'SHOW_TIP' })}>
                            <Button.Content
                                text="Dica"
                                className="text-base text-zinc-100"
                            />
                        </Button.Root>
                    )}

                    <Button.Root
                        className='mt-4 text-base md:text-md px-6 py-3 rounded-full border border-white cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                                       hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
                        onClick={() => dispatch({ type: 'REMOVE_OPTION' })}
                    >
                        <Button.Content
                            text="Excluir uma"
                            className="text-base text-zinc-100"
                        />
                    </Button.Root>
                </div>
            )}

            {!quizState.answerSelected && quizState.helpTip === 'tip' && (
                <p className="mt-4 text-base text-zinc-100">
                    {currentQuestion.tip}
                </p>
            )}

            {quizState.answerSelected && (
                <Button.Root
                    onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
                    className="mt-4 text-base md:text-md px-6 py-3 rounded-full border-2 border-white cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                           hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]"
                >
                    <Button.Content
                        text="Continuar"
                        className="text-base md:text-2xl lg:text-2xl text-zinc-100 font-bold"
                    />
                </Button.Root>
            )}
        </>
    )
}

export default QuestionContent