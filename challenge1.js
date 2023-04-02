const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2")

const superEventHandler = {
    MouseEnter: function () {
        h2.innerText = "Mouse is Here!";
        h2.style.color = colors[0];
    },
    MouseLeave: function () {
        h2.innerText = "Mouse is Left!";
        h2.style.color = colors[1];
    },
    WindowResize: function () {
        h2.innerText = "You Just Resized!!";
        h2.style.color = colors[2];
    },
    RightClick: function () {
        h2.innerText = "That was a right click!";
        h2.style.color = colors[3];
    }
};

h2.addEventListener("mouseenter", superEventHandler.MouseEnter);
h2.addEventListener("mouseleave", superEventHandler.MouseLeave);
window.addEventListener("resize", superEventHandler.WindowResize);
window.addEventListener("contextmenu", superEventHandler.RightClick);

/*
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
    h1.style.color = "turquoise";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is left!";
    h1.style.color = "coral";
}

function handleWindowResize(){
    h1.innerText = "You just Resized!";
    h1.style.color ="rebeccapurple";
    //document.body.style.backgroundColor = "rebeccapurple";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("no Wifi");
}

//h1.addEventListener("click", handleTitleClick); // title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);

/*

title.style.color = "blue";





/*
//const hellos = document.getElementsByClassName("hello");
const title = document.querySelector("#hello");
const title = document.getElementById("hello");
console.log(title);



/*
//const age = prompt("hello How old are you?");
const age = parseInt(prompt("hello How old are you?"));
//console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("please write a real positive number");
} else if(age < 19){
    console.log("you are too young" + age);
} else if(age >= 19 && age <= 50){
    console.log("you can drink" + age);
} else{
    console.log("Too Old");
}
 
*/