const API_URL = 'https://talaikis.com/api/quotes/random/';
const ERROR_MSG = 'Something went wrong. Try again.';

const quoteBody = document.getElementById("quoteBody");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// Fetching and rendering data

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
    quoteAuthor.innerText = newQuoteAuthor

};

const renderError = () => {
    quoteBody.innerText = ERROR_MSG;
    quoteAuthor.innerText = ' '
};

window.addEventListener('load', fetchData);
newQuoteBtn.addEventListener('click', fetchData);


// Setting random background color:

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

const setRandomBgColor = () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

window.addEventListener('load', setRandomBgColor);
newQuoteBtn.addEventListener('click', setRandomBgColor);


