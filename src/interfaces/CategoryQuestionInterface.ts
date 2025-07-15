import type { QuestionInterface } from "./QuestionInterface";

export interface CategoryQuestionInterface {
    category: string;
    questions: QuestionInterface[];
}