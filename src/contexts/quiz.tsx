import { createContext, useReducer, type ReactNode } from "react";
import questions from '../data/questions';

const STAGES: string[] = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
};

type QuizState = typeof initialState;

type QuizAction = 
    | { type: 'CHANGE_STATE' }
    | { type: 'REORDER_QUESTIONS' }
    | { type: 'CHANGE_QUESTION' }

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

        case 'REORDER_QUESTIONS': {
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            }

        }

        case 'CHANGE_QUESTION': {
            const nextQuestion = state.currentQuestion + 1;
            return {
                ...state,
                currentQuestion: nextQuestion
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