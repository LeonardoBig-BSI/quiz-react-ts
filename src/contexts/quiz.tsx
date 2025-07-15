import { createContext, useReducer, type ReactNode } from "react";
import questions from '../data/questions_complete';
import type { QuestionInterface } from "../interfaces/QuestionInterface";

const STAGES: string[] = ["Start", "Category", "Playing", "End"];

interface QuizState {
    gameStage: string;
    questions: QuestionInterface[];
    currentQuestion: number;
    score: number;
    answerSelected: boolean;
    optionSelected: string;
    helpTip: string;
    optionToHide: string;
}

const initialState: QuizState = {
    gameStage: STAGES[0],
    questions: [],
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    optionSelected: "",
    helpTip: "",
    optionToHide: "",
};


type QuizAction =
    | { type: 'CHANGE_STATE' }
    | { type: 'REORDER_QUESTIONS' }
    | { type: 'CHANGE_QUESTION' }
    | { type: 'NEW_GAME' }
    | {
        type: 'CHECK_ANSWER',
        payload: {
            answer: string;
            option: string;
        }
    }
    | {
        type: 'START_GAME',
        payload: {
            category: string,
        }
    }
    | { type: 'SHOW_TIP' }
    | { type: 'REMOVE_OPTION' }

const quizReducer = (state: QuizState = initialState, action: QuizAction): QuizState => {
    console.log("State:", state);
    console.log("Action disparada:", action);

    switch (action.type) {
        case 'CHANGE_STATE': {
            return {
                ...state,
                gameStage: STAGES[1],
            };

        }

        case 'START_GAME': {
            const categoryData = questions.find(
                (item) => item.category === action.payload.category
            );

            const categoryQuestions = categoryData?.questions ?? [];

            return {
                ...state,
                questions: categoryQuestions,
                gameStage: STAGES[2],
                currentQuestion: 0,
                score: 0,
                answerSelected: false,
                optionSelected: "",
            };
        }

        case 'REORDER_QUESTIONS': {
            const reorderedQuestions = [...state.questions].sort(() => Math.random() - 0.5);

            return {
                ...state,
                questions: reorderedQuestions,
            }

        }

        case 'CHANGE_QUESTION': {
            const nextQuestion = state.currentQuestion + 1;
            let endGame: boolean = false;

            if (!state.questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                optionSelected: "",
                helpTip: "",
                optionToHide: "",
            }
        }

        case 'NEW_GAME':
            return initialState;

        case 'CHECK_ANSWER': {
            if (state.answerSelected) return state;

            const answer: string = action.payload.answer;
            const option: string = action.payload.option;
            let correctAnswers: number = 0;

            if (answer === option) correctAnswers += 1;

            return {
                ...state,
                score: state.score + correctAnswers,
                optionSelected: option,
                answerSelected: true,
            }

        }

        case 'SHOW_TIP': {
            return {
                ...state,
                helpTip: 'tip',
            }
        }

        case 'REMOVE_OPTION': {
            const questionWithouOption = state.questions[state.currentQuestion];

            let repeat: boolean = true;
            let optionToHide: string = "";

            questionWithouOption.options.forEach((option) => {
                if(option !== questionWithouOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                }
            });

            return {
                ...state,
                optionToHide,
                helpTip: "",
            }
        }
        
        default:
            return state;
    }
}

interface QuizContextType {
    state: QuizState;
    dispatch: React.Dispatch<QuizAction>;
}

interface QuizProviderProps {
    children: ReactNode
}

export const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: QuizProviderProps) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const contextValue: QuizContextType = { state, dispatch };

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};