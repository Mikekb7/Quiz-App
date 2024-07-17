const questions = [
  {question: 'What is the largest land animal',
  answers:[
      {text: 'Shark',correct:false},
      {text: 'Whale', correct:true},
      {text: 'Elephant',correct:false},
      {text: 'Giraff', correct:false}
  ]
},{question: 'What is the largest desert in the world',
  answers:[
      {text: 'Sahara',correct:false},
      {text: 'Antartica', correct:true},
      {text: 'Kalahari',correct:false},
      {text: 'Gobi', correct:false}
  ],
  },{question: 'What is the smallest continent in the world',
  answers:[
      {text: 'Africa',correct:false},
      {text: 'Europe', correct:false},
      {text: 'Australia',correct:true},
      {text: 'Asia', correct:false}
  ]
  },
  {question: 'What is the smallest continent in the world',
  answers:[
      {text: 'Vatican city',correct:false},
      {text: 'Whale', correct:true},
      {text: 'Elephant',correct:false},
      {text: 'Giraff', correct:false}
  ]
  }

]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
  currentQuestionIndex = 0
  score = 0
  nextBtn.innerHTML = 'Next'
  showQuestion()
}

function showQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerHTML = answer.text;
      button.classList.add('btn')
      answerButtons.appendChild(button)
      if (answer.correct){
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
  })

}

function resetState(){
  nextBtn.style.display = 'none'
  while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true'
  if (isCorrect){
      selectedBtn.classList.add('correct')
      score ++

  }
  else{
      selectedBtn.classList.add('incorrect')
  }
  Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === 'true'){
          button.classList.add('correct')
      }
      button.disabled = true

  })
  nextBtn.style.display = 'block';

}
function showScore(){
  resetState()
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
  nextBtn.innerHTML = 'Play Again!'
  nextBtn.style.display = 'Block'
}
function handleNextButton(){
  currentQuestionIndex ++
  if (currentQuestionIndex < questions.length){
      showQuestion()
  }else{
      showScore()
  }
}
nextBtn.addEventListener('click', () =>{
  if(currentQuestionIndex < questions.length){
      handleNextButton()
  }
  else{
      startQuiz()
  }
})



startQuiz()

