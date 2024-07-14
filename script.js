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


let projectsAdded = false;

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();

    if (!projectsAdded) {
        const workList = document.querySelector('.work-list');

        const moreWorks = `
        <div class="work">
            <img src="Images/QuizWork.png" height="550px">
            <div class="layer">
                <h3>Quiz Game</h3>
                <p>A Simple Quiz Game on Computer Science Topics with Scoring</p>
                <a href="https://subbu5602.github.io/Simple_Quiz_Game/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
       
        <div class="work">
            <img src="Images/RockPaperScissors.png" height="550px">
            <div class="layer">
                <h3>Rock-Paper-Scissors Game</h3>
                <p>A Simple Rock-Paper-Scissors Game played with the computer with Score Recording</p>
                <a href="https://subbu5602.github.io/Rock_Paper_Scissors_Game/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
        
        <div class="work">
            <img src="Images/ToDoList.png" height="550px">
            <div class="layer">
                <h3>Simple To-Do-List</h3>
                <p>A Simplistic To-Do-List</p>
                <a href="https://subbu5602.github.io/To-Do-List/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>

        <div class="work">
        <img src="Images/Calculator.png" height="550px">
        <div class="layer">
            <h3>Simple Calculator</h3>
            <p>A Simple Calculator</p>
            <a href="https://subbu5602.github.io/Calculator_Program/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
        </div>
    </div>
        `;
        workList.innerHTML += moreWorks;

        projectsAdded = true;
        this.textContent = "That's all Folks !!";
        this.disabled = true;
    }
});

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