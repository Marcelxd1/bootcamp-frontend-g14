//@ts-check
import { Question } from "./Question.js";

class Quiz{

    score = 0;
    questionIndex = 0;

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} question found
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score ++;
        }
        this.questionIndex++;
    }

}

export {Quiz};