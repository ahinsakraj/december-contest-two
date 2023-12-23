const catContainer = document.querySelector("#category_container");
const startBtn = document.querySelector("#hero button");
const tagSpan = document.querySelectorAll(".tag>span");
const tagBtn = document.querySelectorAll(".tag>button");



// Quiz questions
let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who is the current President of the United States?",
                "options": ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
                "answer": "Joe Biden"
            },
            {
                "question": "What is the capital of France?",
                "options": ["Berlin", "Madrid", "Paris", "Rome"],
                "answer": "Paris"
            },
            {
                "question": "Which planet is known as the Red Planet?",
                "options": ["Earth", "Mars", "Venus", "Jupiter"],
                "answer": "Mars"
            }
            // Add more questions as needed...
        ]
    },
    {
        "category": "Science",
        "questions": [
            {
                "question": "What is the chemical symbol for water?",
                "options": ["H2O", "CO2", "O2", "N2"],
                "answer": "H2O"
            },
            {
                "question": "Who developed the theory of relativity?",
                "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                "answer": "Albert Einstein"
            },
            {
                "question": "What is the largest mammal in the world?",
                "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                "answer": "Blue Whale"
            }
            // Add more questions as needed...
        ]
    }
    // Add more categories as needed...
];

// Function to toggle category section

function toggleCategory(e) {
  if (catContainer.style.display === "none") {
    catContainer.style.display = "flex";
  } else catContainer.style.display = "none";
}

startBtn.addEventListener("click", toggleCategory);

let selectedCnt=0;
function tagSelect(close, button) {
  if (close.style.display === "none") {
    close.style.display = "flex";
    button.style.backgroundColor = "#FFCD2E";
    selectedCnt++;
  } else {
    close.style.display = "none";
    button.style.backgroundColor = "#d1d1d1";
    selectedCnt--;
  }
}
tagBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const close = e.target.nextElementSibling;
    const button = e.target;
    tagSelect(close, button);
  });
});
tagSpan.forEach((item) => {
  item.addEventListener("click", (e) => {
    const close = e.currentTarget;
    const button = e.currentTarget.previousElementSibling;
    tagSelect(close, button);
  });
});