const quotes = [
    {
        quote : "best of best",
        author : "wlat",
    },
    {
        quote : "hihihi",
        author : "CM",
    },
    {
        quote : "best3",
        author : "kirux",
    },
    {
        quote : "best4",
        author : "kirux",
    },
    {
        quote : "best5",
        author : "kirux",
    },
    {
        quote : "best6",
        author : "kirux",
    },
    {
        quote : "best7",
        author : "kirux",
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
