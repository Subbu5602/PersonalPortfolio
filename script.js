var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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


        //Subsequent New Projects to be added in this Array
        const projects = [
            {
                img: "Images/WeatherWork.png",
                title: "Weather App",
                description: "This app gives you a compact and comprehensive weather report of a city",
                link: "https://subbu5602.github.io/Simple-Weather-Application/"
            },
            {
                img: "Images/ImageSearch.png",
                title: "Image Search Engine",
                description: "This app shows you related images of any given terms",
                link: "https://subbu5602.github.io/Image_Search_Engine/"
            },
            {
                img: "Images/PasswordGenerator.png",
                title: "Password Generator",
                description: "This app can generate a random password and lets the user know of the relative strength of the password",
                link: "https://subbu5602.github.io/Password-Generator/"
            },
            {
                img: "Images/QuizWork.png",
                title: "Quiz Game",
                description: "A Simple Quiz Game on Computer Science Topics with Scoring",
                link: "https://subbu5602.github.io/Simple_Quiz_Game/"
            },
            {
                img: "Images/RockPaperScissors.png",
                title: "Rock-Paper-Scissors Game",
                description: "A Simple Rock-Paper-Scissors Game played with the computer with Score Recording",
                link: "https://subbu5602.github.io/Rock_Paper_Scissors_Game/"
            },
            {
                img: "Images/ToDoList.png",
                title: "Simple To-Do-List",
                description: "A Simplistic To-Do-List",
                link: "https://subbu5602.github.io/To-Do-List/"
            },
            {
                img: "Images/Calculator.png",
                title: "Simple Calculator",
                description: "A Simple Calculator",
                link: "https://subbu5602.github.io/Calculator_Program/"
            },
            {
                img: "Images/Notebook.png",
                title: "Note Taking Application",
                description: "A simple NotePad type Application",
                link: "https://github.com/Subbu5602/NotePad_App"
            }
        ];

        let currentStartIndex = 0;
        const projectsPerPage = 3;

        function displayProjects() {
            const workList = document.querySelector('.work-list');
            workList.innerHTML = '';

            for (let i = 0; i < projectsPerPage; i++) {
                const projectIndex = (currentStartIndex + i) % projects.length;
                const project = projects[projectIndex];
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
                workList.innerHTML += projectHTML;
            }

            currentStartIndex = (currentStartIndex + projectsPerPage) % projects.length;
        }

        document.querySelector('.btn').addEventListener('click', function (e) {
            e.preventDefault();
            displayProjects();
        });

        // Initialize the first set of projects
        displayProjects();




var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwHFjGQVLGl5WQJfiRJcCU-txH6eMk8ht3OIhtDCeDJyWwHrqcGJuZ3-k-51JICsaBtaw/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Received !";
            setTimeout(function(){
                msg.innerHTML = "";
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})