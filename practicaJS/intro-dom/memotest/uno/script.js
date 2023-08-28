const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const cards = symbols.concat(symbols);
shuffleArray(cards);

const board = document.getElementById('board');

cards.forEach(symbol => {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = symbol;
  card.addEventListener('click', () =>{
    flipCard(card, symbol)
    console.log(symbol);

  });
  board.appendChild(card);
});

let flippedCard = null;
let lockBoard = false;

function flipCard(card, symbol) {
  if (lockBoard || card === flippedCard) return;

  card.classList.add('flipped');

  if (!flippedCard) {
    flippedCard = card;
  } else {
    if (flippedCard.textContent === symbol) {
      flippedCard.removeEventListener('click', flipCard);
      card.removeEventListener('click', flipCard);
      flippedCard = null;
    } else {
      lockBoard = true;
      setTimeout(() => {
        card.classList.remove('flipped');
        flippedCard.classList.remove('flipped');
        flippedCard = null;
        lockBoard = false;
      }, 1000);
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}