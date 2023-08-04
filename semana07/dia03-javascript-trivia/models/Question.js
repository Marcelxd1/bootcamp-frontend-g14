class Question{

    /**
     * 
     * @param {string} question 
     * @param {string[]} choices of the question
     * @param {string} answer that is correct
     */
    constructor(question, choices, answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice selected
     * @returns {boolean} true if the answer 
     */

    correctAnswer(choice){
        return this.answer===choice;
    }
}

export {Question};