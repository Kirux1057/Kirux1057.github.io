const clock = document.querySelector("h2#clock");

function getXmas(){
    const date = new Date();
    const xmas = new Date("December 25, 2023 00:00:00");
    const dateSub = (xmas - date)

    const remainDate = String(Math.floor(dateSub / (3600*24*1000))).padStart(2,"0");
    const remainHour = String(Math.floor(dateSub / (3600*1000) % 24)).padStart(2,"0");
    const remainMin = String(Math.floor(dateSub / (60*1000) % 60)).padStart(2,"0");
    const remainSec = String(Math.floor(dateSub / 1000 % 60)).padStart(2,"0");

    clock.innerHTML = `${remainDate}d ${remainHour}h ${remainMin}m ${remainSec}s`;
}

getXmas();
setInterval(getXmas, 1000);