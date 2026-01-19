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

const consoleLogOutputButton = document.querySelector('#output-log-btn');

consoleLogOutputButton.addEventListener('click', () => outputLog('ДЗ №4'))

function outputLog(message) {
  alert('10')
  console.log(message)
}

const consoleTitleOutput = document.querySelector('.product-title');

consoleTitleOutput.addEventListener('mouseover', () => {
  console.log(consoleTitleOutput.textContent)
})

const redColorChangeBtn = document.querySelector('#change-color-red-btn');

redColorChangeBtn.addEventListener('click', () => {
  redColorChangeBtn.classList.toggle('change-color-green')
})
