const quizQuestions = [
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Beijing', 'Seoul'],
    correctAnswer: 'Tokyo',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au'],
    correctAnswer: 'Au',
  },
  {
    question: 'Who was the first President of the United States?',
    options: ['Benjamin Franklin', 'Thomas Jefferson', 'George Washington'],
    correctAnswer: 'George Washington',
  },
  {
    question: 'Which film won the Academy Award for Best Picture in 1994?',
    options: ['Forrest Gump', 'Pulp Fiction', 'The Shawshank Redemption'],
    correctAnswer: 'Forrest Gump',
  },
  {
    question: "Who is known as the 'King of Pop'?",
    options: ['Elvis Presley', 'Michael Jackson', 'Prince'],
    correctAnswer: 'Michael Jackson',
  },
  {
    question: 'In which sport would you perform a slam dunk?',
    options: ['Soccer', 'Basketball', 'Tennis'],
    correctAnswer: 'Basketball',
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    options: ['Mark Twain', 'Harper Lee', 'F. Scott Fitzgerald'],
    correctAnswer: 'Harper Lee',
  },
  {
    question: "What does the abbreviation 'CPU' stand for?",
    options: [
      'Computer Processing Unit',
      'Central Processing Unit',
      'Core Processing Unit',
    ],
    correctAnswer: 'Central Processing Unit',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Avocado', 'Tomato', 'Onion'],
    correctAnswer: 'Avocado',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars'],
    correctAnswer: 'Jupiter',
  },
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextBtn = document.getElementById('next-button');
const results = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function showQuestions(questionIndex) {
  const current = quizQuestions[questionIndex];
  questionElement.innerHTML = ''; // Remove the existing content
  const questionText = document.createElement('p');
  questionText.textContent = `Question ${currentQuestion + 1}: ${
    current.question
  }`;
  questionText.classList.add('question-enter'); // Add the animation class
  questionElement.appendChild(questionText);

  choicesElement.innerHTML = ``;

  for (let i = 0; i < current.options.length; i++) {
    const options = current.options[i];
    const choices = document.createElement('li');
    choices.innerHTML = `<input type="radio" name="choice" value="${options}">${options}`;
    choicesElement.append(choices);
  }
}

showQuestions(currentQuestion);

nextBtn.addEventListener('click', () => {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (!selectedChoice) {
    return;
  }

  const answer = selectedChoice.value;
  if (answer === quizQuestions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestions(currentQuestion);
  } else {
    choicesElement.style.display = 'none';
    nextBtn.style.display = 'none';
    questionElement.style.display = 'none';
    results.textContent = `Your score ${score} out of ${currentQuestion} questions`;
  }
});
