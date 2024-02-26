/*The questions and answers*/
const quizData=[
  {
      question: "01. Who won the Cricket World Cup in 1975?",
      a: "Sri Lanka",
      b: "Australia",
      c: "India",
      d: "West Indies",
      correct: "d",
  },
  {
      question: "02. In a badminton game, the winner is the first one to reach _____ points.",
      a: "11",
      b: "16",
      c: "21",
      d: "20",
      correct: "c",
  },
  {
      question: "03. How many strokes are often performed in an international swimming competition?",
      a: "3",
      b: "4",
      c: "5",
      d: "2",
      correct: "b",
  },
  {
      question: "04. Which 2 countries hosted the 2002 FIFA World Cup?",
      a: "Sweden & Brazil",
      b: "United States & Cananda",
      c: "South Korea & Japan",
      d: "Germany & Italy",
      correct: "c",
  },
  {
    question: "05. Who is the first batsman to cross 10000 runs in Test Cricket matches?",
    a: "Sunil Gavaskar.",
    b: "Brian Lara",
    c: "Kumar Sangakkara",
    d: "Sachin Tendulkar",
    correct: "a",
  },
  {
    question: "06. Which term is used when a player violates the rules in badminton?",
    a: "A flaw",
    b: "An error",
    c: "A mistake",
    d: "A fault",
    correct: "d",
  },
  {
    question: "07. Who is widely considered the all time greatest Olympian swimmer?",
    a: "Matt Biondi",
    b: "Mark Spitz",
    c: "Adam Peaty",
    d: "Michael Phelps",
    correct: "d",
  },
  {
    question: "08. Who is the only football player with two World Cup Golden Balls?",
    a: "Neymar",
    b: "Lionel Messi",
    c: "Cristiano Ronaldo",
    d: "Kylian Mbappé",
    correct: "b",
  },
  {
    question: "09. How long is a lap in an Olympic-sized swimming pool?",
    a: "50 metres",
    b: "100 metres",
    c: "200 metres",
    d: "25 metres",
    correct: "a",
  },
  {
    question: "10.What can be the maximum number of games in a badminton match?",
    a: "7",
    b: "3",
    c: "5",
    d: "6",
    correct: "b",
  },
];


const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('questions')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('next_btn')

let currentQuiz=0
let score=0

loadQuiz()

/*Timer*/
const timeLimitInMinutes = 1
let timeLeftInSeconds = timeLimitInMinutes * 60

const timer = setInterval(function() {
  if (timeLeftInSeconds <= 0) {
    clearInterval(timer)
    quiz.innerHTML = `
    <h2>Time's Up!</h2>
    <footer><button onclick="location.reload()">Try Again</button></footer>    
  `;
  }

  const minutes = Math.floor(timeLeftInSeconds / 60)
  const seconds = timeLeftInSeconds % 60

  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`
  document.getElementById('timer').innerText = `Time: ${timeString}`
  
  timeLeftInSeconds--
}, 1000)


function loadQuiz(){
  deselectAnswers()
  const currentQuizData=quizData[currentQuiz]
  questionEl.innerText=currentQuizData.question
  a_text.innerText=currentQuizData.a
  b_text.innerText=currentQuizData.b
  c_text.innerText=currentQuizData.c
  d_text.innerText=currentQuizData.d
}

function deselectAnswers(){  
    answerEls.forEach(answerEl=>answerEl.checked=false);
    answerEls.forEach(answerEl=>answerEl.disabled=false);
    submitBtn.hidden = false;
    questionEl.style.backgroundColor = "#ffffff";;
    questionEl.style.color = "#000000";
}

function getSelected(){
  let answerSelected = document.querySelectorAll('.answer');
  var answer = "";

  answerSelected.forEach(answerEl=>{
      if(answerEl.checked){
          answer=answerEl.id
      }
  })
  return answer
}

/*Cgecking the selected answer and show right or wrong*/
submitBtn.addEventListener('click',()=>{  
  const answer=getSelected() 
  if(answer && answer != ""){
    answerEls.forEach(answerEl=>answerEl.disabled=true);
    submitBtn.hidden = true;
    document.getElementById("error").style.display = "none";
      if (answer===quizData[currentQuiz].correct){        
        questionEl.style.backgroundColor = "#03a303";
        questionEl.style.color = "white";
        score++
      }
      else{           
        questionEl.style.backgroundColor = "#db0606";;
        questionEl.style.color = "white";
      }
      setTimeout(() => {
        currentQuiz++ 

        if(currentQuiz < quizData.length){
            loadQuiz()
        /*The result*/    
        }else{
            var grade = (score/quizData.length)*100
            var wrong_ans = quizData.length-score
            var commentResults = getComment(grade);
            var comment = commentResults.comment;
            var color = commentResults.color;
            quiz.innerHTML = `
            <div style="color: red;height: 70px;"><h2>Congratulations, Quiz Completed!</h2></div>
            <hr/>
            <ul style="text-align:center;" id=results>
              <li>Questions: ${quizData.length}</li>
              <li>Wrong answers: ${wrong_ans}</li>
              <li>Score: ${score}</li>
              <li>Grade: ${grade}%</li>
              <li>You took: ${timeLimitInMinutes * 60 - timeLeftInSeconds} seconds </li>
              <li>Comment: <label style="color: ${color};">${comment} </label></li>            
            </ul>
            <footer><button onclick="location.reload()">Start Again</button></footer>
            `;
        }
    
      }, 800);
      
  }
  else{ document.getElementById("error").style.display = "block"; }
})

/*The comment in the result*/
function getComment(grade){
  let comment;
  let color;
  if(grade >= 75){
    comment = "Exccellent";
    color = "green";
  }
  else if(grade < 75 && grade >= 50){
    comment = "Good";
    color = "blue";
  }
  else if(grade < 50 && grade >= 25){
    comment = "Not Bad";
    color = "orange";
  }
  else {
    comment = "Poor";
    color = "red";
  }
  return {comment, color}
}