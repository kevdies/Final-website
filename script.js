/* const h2 = document.createElement("h2");
h2.textContent = "this content added by JavaScript";
document.querySelector("body").appendChild(h2); */


/*mouseover event to enlarge image when mouse clicks the img
*/

    const photo = document.getElementById("kevandarti");
    photo.addEventListener('click', function () {
        alert("Fall Hike Around Port Huron");
    });


let careerSkillsButton = document.querySelector("button#careerSkills");
let careerSkills = document.querySelector("div.careerSkills");
careerSkills.style.display = "none";

careerSkillsButton.onclick = () => {
    careerSkills.style.display = "block";
};

careerSkillsButton.ondblclick = () => {
    careerSkills.style.display = "none";
};


const careerBackgroundButton = document.querySelector("button#careerBackground");
const careerBackground = document.querySelector("div.careerBackground");
careerBackground.style.display = "none";

careerBackgroundButton.onclick = () => {
    careerBackground.style.display = "block";
};
careerBackgroundButton.ondblclick = () => {
    careerBackground.style.display = "none";
};

const hobbiesButton = document.querySelector("button#hobbies");
const hobbies = document.querySelector("div.hobbies");
hobbies.style.display = "none";

hobbiesButton.onclick = () => {
    hobbies.style.display = "block";
};

hobbiesButton.ondblclick = () => {
    hobbies.style.display = "none";
};

const futureButton = document.querySelector("button#future");
const future = document.querySelector("div.future");
future.style.display = "none";

futureButton.onclick = () => {
    future.style.display = "block";
};

futureButton.ondblclick = () => {
    future.style.display = "none";
};
