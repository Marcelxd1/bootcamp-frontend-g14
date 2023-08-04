import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";



const quizQuestions = document.querySelector('.quiz__questions');
const quizAnswers = document.querySelector('.quiz__answers');
const quizNumber = document.querySelector('.quiz__number');
const quizBtn = document.querySelector('.quiz__btn');


const newQuiz = new Quiz(questions);

function answerQuestion(event){
    // Habilitar boton de siguiente
    const target = event.target;


    const button = document.querySelector('.quiz__btn button');
    button.className = "text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " ;
    
    button.disabled = false;

    //REspuestas correctas o incorrectas
    const answerButtons = document.querySelectorAll('.quiz__answers button');
    answerButtons.forEach((button) => {
        button.disabled =true;
        if(newQuiz.getQuestionIndex().correctAnswer(button.textContent)){
            button.className = "text-white border border-green-700 bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
        }
    });

    if(newQuiz.getQuestionIndex().correctAnswer(target.textContent)){
        newQuiz.score ++;
    }
    else{
        target.className = "text-white border border-red-700 bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full";
    }
}

function startAgain(){
    newQuiz.getQuestionIndex
}


function changeQuestion(){
    // Tu lógica para manejar la respuesta del usuario va aquí
    newQuiz.questionIndex ++;
    renderQAs();
}



function renderQAs (){
    let anws = "";

    if(newQuiz.questions.length===newQuiz.questionIndex){
        if(newQuiz.score>=2){
            quizQuestions.innerHTML = `
                <p class="text-xl font-bold text-green-900 text-center mb-4">APROBADO</p>
                <div class="ext-md font-bold text-gray-700 text-center mb-4">Tu puntaje fue: ${newQuiz.score} de ${newQuiz.questions.length} </div>
            `;
        }
        else{
            quizQuestions.innerHTML = `
                <p class="text-xl font-bold text-red-900 text-center mb-4">DESAPROBADO</p>
                <div class="ext-md font-bold text-gray-700 text-center mb-4">Tu puntaje fue: ${newQuiz.score} de ${newQuiz.questions.length} </div>
            `;
        }
        quizAnswers.innerHTML = null;
        quizNumber.innerHTML =null;
        quizBtn.innerHTML = `
            <button class="text-gray-400 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " >Iniciar de nuevo</button>
        `
        const button = document.querySelector('.quiz__btn button');
        
        button.addEventListener('click', () => startAgain());
    }
    else{
        quizQuestions.innerHTML = `
            <p class="text-xl font-bold text-gray-900 text-center mb-4">${newQuiz.getQuestionIndex().question}</p>
        `;

        newQuiz.getQuestionIndex().choices.forEach(function(choice){
            anws += `
            <button class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"  onclick="answerQuestion(event)">${choice}</button>
            `
        })

        quizAnswers.innerHTML = anws;

        const answerButtons = document.querySelectorAll('.quiz__answers button');
        answerButtons.forEach((button) => {
            button.addEventListener('click', answerQuestion);
        });

        quizNumber.innerHTML = `
            <div class="ext-md font-bold text-gray-700 text-center mb-4">Pregunta ${newQuiz.questionIndex+1} de ${newQuiz.questions.length} </div>
        `

        quizBtn.innerHTML = `
            <button class="text-gray-400 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " disabled >Siguiente Pregunta</button>
        `
        const button = document.querySelector('.quiz__btn button');
        
        button.addEventListener('click', () => changeQuestion());
    }
}

renderQAs();

{/* <button class="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " disabled >Siguiente Pregunta</button> */}
