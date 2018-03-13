const API_URL = 'https://talaikis.com/api/quotes/random/';
const ERROR_MSG = 'AN ERROR OCCURRED. CHECK YOUR INTERNET CONNECTION AND TRY AGAIN.';

const quoteBody = document.getElementById("quoteBody");
const quoteAuthor = document.getElementById("quoteAuthor");
const errorMsg = document.getElementById("errorMsg");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const twitterBtn = document.getElementById("twitterIcon");

const colors = [
    "#D3C4D1",
    '#FF729F',
    '#56CBF9',
    '#81F4E1',
    '#FA8334',
    '#EBC2AB',
    '#FF928B',
    '#FFF05A',
    '#9BC53D',
    '#E55934',
    '#FDE74C',
    '#5BC0EB'
];

const fetchData = () => {

    fetch(API_URL)
        .then(response => response.json())
        .then(data => renderNewQuote(data))
        .catch(error => renderError())

};

const renderNewQuote = (data) => {

    const newQuoteBody = data.quote;
    const newQuoteAuthor = data.author;

    quoteBody.innerText = newQuoteBody;
    quoteAuthor.innerText = newQuoteAuthor;
    errorMsg.innerText = ''

};

const renderError = () => {
    errorMsg.innerText = ERROR_MSG;
    quoteBody.innerText = '';
    quoteAuthor.innerText = ''
};

const setRandomBgColor = () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

const handleTwitterBtn = () => {

    const twitterUrl = "https://twitter.com/intent/tweet";
    const tweet = `${quoteBody.innerText} - ${quoteAuthor.innerText}`;
    const hashtags = "quote, inspirational";
    const via = "RandomQuoteMachine";

    window.open(`${twitterUrl}?text=${tweet};hashtags=${hashtags};via=${via}`,"","width=500,height=500")

};

window.addEventListener('load', setRandomBgColor);
window.addEventListener('load', fetchData);
newQuoteBtn.addEventListener('click', setRandomBgColor);
newQuoteBtn.addEventListener('click', fetchData);
twitterBtn.addEventListener("click", handleTwitterBtn);