const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const cards = symbols.concat(symbols);
shuffleArray(cards);

const board = document.getElementById('board');
let flippedCards = [];
let lockBoard = false;

cards.forEach(symbol => {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = symbol;
  card.addEventListener('click', () => flipCard(card));
  board.appendChild(card);
});

function flipCard(card) {
  if (lockBoard || card.classList.contains('flipped')) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    if (card1.textContent === card2.textContent) {
      card1.removeEventListener('click', flipCard);
      card2.removeEventListener('click', flipCard);
      flippedCards = [];
    } else {
      lockBoard = true;
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
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