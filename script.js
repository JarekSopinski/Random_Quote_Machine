const API_URL = 'https://talaikis.com/api/quotes/random/';
const ERROR_MSG = 'Something went wrong. Try again.';

const quoteBody = document.getElementById("quoteBody");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

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
    quoteAuthor.innerText = ''
};

window.addEventListener('load', fetchData);
newQuoteBtn.addEventListener('click', fetchData);


