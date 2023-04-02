const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //key , variable
    paintGreetings();
    //console.log(username);
}

function paintGreetings(){
    const writtenUsername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${writtenUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
//===================start=======================
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
}else {
    paintGreetings();
}


//link.addEventListener("click", linkClick);

