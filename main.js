const productCards = document.querySelectorAll('.card-container');
const changeColorAllButton = document.querySelector('#change-all-card-color-button');
const redColorHash = '#f60303ff';
const yellowColorHash = '#e5ff00ff';

changeColorAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = redColorHash)
})


const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = yellowColorHash
})

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  
  if (answer === true) {
    window.open('https://google.com')
  }}

const outputConsoleLogButton = document.querySelector('#output-log');

outputConsoleLogButton.addEventListener('click', () => outputLog('ДЗ №4'))

function outputLog(message) {
  alert('10')
  console.log(message)
}

const outputConsoleTitle = document.querySelector('.product-title');

outputConsoleTitle.addEventListener('mouseover', () => {
  console.log(outputConsoleTitle.textContent)
})

const toggleColor = document.querySelector('#change-color-red');

toggleColor.addEventListener('click', () => {
  toggleColor.classList.toggle('change-color-green')
})
