import { useContext } from "react";
import { QuizContext } from "../../../contexts/quiz";
import { Button } from "../../Button";

interface OptionAnswerContentProps {
    option: string;
    answer: string;
    selectOption: (option: string) => void;
    hide: string;
}

const OptionAnswerContent = ({ option, answer, selectOption, hide }: OptionAnswerContentProps) => {
    const quizContext = useContext(QuizContext);

    if (!quizContext) {
        throw new Error("QuizContext não foi fornecido.");
    }

    const { state: quizState } = quizContext;

    console.log(quizState);

    if (!quizContext) {
        throw new Error("QuizContext não foi fornecido.");
    }

    console.log(quizState);

    return (
        <Button.Root
            className={`
                       mb-4 p-4 rounded-lg cursor-pointer duration-300
                        ${!quizState.answerSelected ?
                          'bg-colorOptionBackground hover:bg-colorHoverOptionBackground opacity-80 hover:opacity-100'
                        : ''}

                        ${quizState.answerSelected && option === answer ?
                          'bg-colorAnswerCorrect hover:bg-colorAnswerCorrect opacity-100' 
                        : ''}

                        ${quizState.answerSelected && option !== answer && quizState.optionSelected === option ?
                          'bg-colorAnswerWrong opacity-100' 
                        : ''}

                        ${quizState.answerSelected && option !== answer && quizState.optionSelected !== option ?
                          'bg-colorOptionBackground opacity-50' 
                        : ''}

                        ${hide ? "hidden": ""}
                      `}
            onClick={() => selectOption(option)}
        >
            <Button.Content
                text={option}
                className="text-base md:text-md text-zinc-100 font-bold"
            />
        </Button.Root>
    )
}

export default OptionAnswerContent;