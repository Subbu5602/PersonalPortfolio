var tablinks = document.getElementsByClassName("tab-links"); //skill set tabs
var tabcontents = document.getElementsByClassName("tab-contents"); //skill tab contents

// First, remove "active-link" class from all tablinks, same for tab Contents,then give a particular tab the class of "active-tab" once an event is triggered 
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Subsequent New Projects to be added on top of this Array

const projects = [
  
  {
    img: "Images/PingPong.png",
    title: "Ping Pong Game",
    description: "Ping Pong Game using Java",
    link: "https://github.com/Subbu5602/PingPong-Game",
  },
  {
    img: "Images/SnakeGame.png",
    title: "Classic Snake Game",
    description: "Popular Snake Game using Java",
    link: "https://github.com/Subbu5602/SnakeGame",
  },
  {
    img: "Images/TicTacToeImage.png",
    title: "Tic-Tac-Toe Game",
    description: "A simple TicTacToe Game using Java",
    link: "https://github.com/Subbu5602/TicTacToeJava",
  },
  {
    img: "Images/PokeDex.png",
    title: "Online PokeDex",
    description:
      "Online PokeDex where user is free to check basic details of any Pokemon",
    link: "https://subbu5602.github.io/Online-PokeDex/",
  },
  {
    img: "Images/Notebook.png",
    title: "Note Taking Application",
    description: "A simple NotePad type Application",
    link: "https://github.com/Subbu5602/NotePad_App",
  },
  {
    img: "Images/Calculator.png",
    title: "Simple Calculator",
    description: "A Simple Calculator",
    link: "https://subbu5602.github.io/Calculator_Program/",
  },
  {
    img: "Images/ToDoList.png",
    title: "Simple To-Do-List",
    description: "A Simplistic To-Do-List",
    link: "https://subbu5602.github.io/To-Do-List/",
  },
  {
    img: "Images/RockPaperScissors.png",
    title: "Rock-Paper-Scissors Game",
    description:
      "A Simple Rock-Paper-Scissors Game played with the computer with Score Recording",
    link: "https://subbu5602.github.io/Rock_Paper_Scissors_Game/",
  },
  {
    img: "Images/QuizWork.png",
    title: "Quiz Game",
    description: "A Simple Quiz Game on Computer Science Topics with Scoring",
    link: "https://subbu5602.github.io/Simple_Quiz_Game/",
  },
  {
    img: "Images/PasswordGenerator.png",
    title: "Password Generator",
    description:
      "This app can generate a random password and lets the user know of the relative strength of the password",
    link: "https://subbu5602.github.io/Password-Generator/",
  },
  {
    img: "Images/ImageSearch.png",
    title: "Image Search Engine",
    description: "This app shows you related images of any given terms",
    link: "https://subbu5602.github.io/Image_Search_Engine/",
  },
  {
    img: "Images/WeatherWork.png",
    title: "Weather App",
    description:
      "This app gives you a compact and comprehensive weather report of a city",
    link: "https://subbu5602.github.io/Simple-Weather-Application/",
  },
];

let currentStartIndex = 0;
const projectsPerPage = 3;

function displayProjects() {
  const workList = document.querySelector(".work-list"); //3 projects that are viewable
  workList.innerHTML = ""; // clears existing projects first to make space

  //loop iterates 3 for 3 projects
  for (let i = 0; i < projectsPerPage; i++) {
     // Calculate the index of the project to display, ensuring it wraps around using modulo
    const projectIndex = (currentStartIndex + i) % projects.length;
    const project = projects[projectIndex];
    //html structure for each project
    const projectHTML = `
                    <div class="work">
                        <img src="${project.img}" height="550px">
                        <div class="layer">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                `;
    // add that project to worklist 
    workList.innerHTML += projectHTML;
  }

   // Update the `currentStartIndex` to move forward by `projectsPerPage`, wrapping around if necessary
  currentStartIndex = (currentStartIndex + projectsPerPage) % projects.length;
}

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault(); // stops page relaoding, allowing js to handle the click event with function
  displayProjects();
});

// Initialize the first set of projects
displayProjects();

//for mobile
var sidemenu = document.getElementById("sidemenu");

//becomes visible at extreme right
function openmenu() {
  sidemenu.style.right = "0";
}

//goes out of view
function closemenu() {
  sidemenu.style.right = "-200px";
}

//url of google form as web app to handle submissions
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwHFjGQVLGl5WQJfiRJcCU-txH6eMk8ht3OIhtDCeDJyWwHrqcGJuZ3-k-51JICsaBtaw/exec";
//refrencing the form in index.html
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //FormData sends info in reqd format
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Received !";
      //after getting response confirming success, wait 5s before resetting the green success msg user received
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      //clear every user input
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
