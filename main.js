const productCards = document.querySelectorAll('.card-container');
const allButtonChangeColor = document.querySelector('#change-all-card-color-button');
const redColorHash = '#f60303ff';
const yellowColorHash = '#e5ff00ff';

allButtonChangeColor.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = redColorHash)
})


const firstProductCard = document.querySelector('.card-container');
const buttonColorChangeFirstCard = document.querySelector('#change-color-first-card-btn');

buttonColorChangeFirstCard.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = yellowColorHash
})

const googleOpenButton = document.querySelector('#open-google-btn');

googleOpenButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  
  if (answer) {
    window.open('https://google.com')
  }}

const outputConsoleLogButton = document.querySelector('#output-log-btn');

outputConsoleLogButton.addEventListener('click', () => outputLog('ДЗ №4'))

function outputLog(message) {
  alert('10')
  console.log(message)
}

const outputConsoleTitle = document.querySelector('.product-title');

outputConsoleTitle.addEventListener('mouseover', () => {
  console.log(outputConsoleTitle.textContent)
})

const toggleColor = document.querySelector('#change-color-red-btn');

toggleColor.addEventListener('click', () => {
  toggleColor.classList.toggle('change-color-green')
})
