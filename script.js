const API_URL = 'https://talaikis.com/api/quotes/random/';
const ERROR_MSG = 'AN ERROR OCCURRED. CHECK YOUR INTERNET CONNECTION AND TRY AGAIN.';

const quoteBody = document.getElementById("quoteBody");
const quoteAuthor = document.getElementById("quoteAuthor");
const errorMsg = document.getElementById("errorMsg");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const twitterBtn = document.getElementsByTagName("img")[0];

const colors = [
    "rgb(211, 196, 209)",
    'rgb(255, 114, 159)',
    'rgb(86, 203, 249)',
    'rgb(129, 244, 225)',
    'rgb(250, 131, 52)',
    'rgb(235, 194, 171)',
    'rgb(255, 146, 139)',
    'rgb(255, 240, 90)',
    'rgb(155, 197, 61)',
    'rgb(229, 89, 52)',
    'rgb(253, 231, 76)',
    'rgb(91, 192, 235)'
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

const setInitialRandomBgColor = () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

const setNewRandomBgColor = () => {

    const currentBGColorRGB = document.body.style.backgroundColor;
    const newBGColor = colors[Math.floor(Math.random() * colors.length)];

    newBGColor === currentBGColorRGB ?
        setNewRandomBgColor()
        :
        document.body.style.backgroundColor = newBGColor
};

const handleTwitterBtn = () => {

    const twitterUrl = "https://twitter.com/intent/tweet";
    const tweet = `${quoteBody.innerText} - ${quoteAuthor.innerText}`;
    const hashtags = "quote, inspirational";
    const via = "RandomQuoteMachine";

    window.open(`${twitterUrl}?text=${tweet};hashtags=${hashtags};via=${via}`,"","width=500,height=500")

};

window.addEventListener('load', setInitialRandomBgColor);
window.addEventListener('load', fetchData);
newQuoteBtn.addEventListener('click', setNewRandomBgColor);
newQuoteBtn.addEventListener('click', fetchData);
twitterBtn.addEventListener("click", handleTwitterBtn);