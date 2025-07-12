import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import { Button } from "../Button";

interface OptionAnswerProps {
    option: string;
    answer: string;
    selectOption: () => void;
}

const OptionAnswer = ({ option, answer, selectOption }: OptionAnswerProps) => {
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
        <Button.Root
            className="mb-4 p-4 bg-colorOptionBackground rounded-lg cursor-pointer opacity-80 hover:bg-colorHoverOptionBackground hover:opacity-100 duration-300"
            onClick={() => selectOption(option)}
        >
            <Button.Content
                text={option}
                className="text-base md:text-md text-zinc-100 font-bold"
            />
        </Button.Root>
    )
}

export default OptionAnswer