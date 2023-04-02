const body = document.querySelector("body");

function handleWinResize(){
    const wid = window.innerWidth;
    let newColor;

    if(wid >= 1000){
        newColor = "yellow";
    }
    else if(wid < 1000 && wid > 700){
        newColor = "purple";
    }
    else if(wid <= 700){
        newColor = "skyblue";
    }
    body.style.backgroundColor = newColor;
}

window.addEventListener("resize", handleWinResize);