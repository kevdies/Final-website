/* const h2 = document.createElement("h2");
h2.textContent = "this content added by JavaScript";
document.querySelector("body").appendChild(h2); */


/*mouseover event to enlarge image when mouse clicks the img
*/
function addingEventListener() {
    const lookingOut = document.getElementById("skydive");
    lookingOut.addEventListener('click', function () {
        alert("Looking towards the horizon");
    });
};

let careerFocusButton = document.querySelector("button #careerFocus");
let careerFocus = document.querySelector("div.careerFocus");
careerFocus.style.display = "none";

careerFocusButton.onclick = () => {
    careerFocus.style.display = "block";
};
