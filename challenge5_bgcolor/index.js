const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const buttonColor = document.querySelector('#change');
const bodybg = document.querySelector("body");

function clickButton(){
    const bgColors1 = colors[Math.floor(Math.random() * colors.length)];
    const bgColors2 = colors[Math.floor(Math.random() * colors.length)];
    console.log(bgColors1);
    bodybg.style.backgroundImage = `linear-gradient(to left top, ${bgColors1}, ${bgColors2})`;
}

buttonColor.addEventListener("click", clickButton);

