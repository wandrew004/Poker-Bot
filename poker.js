// Define card ranks and suits
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

// Create a deck of cards
let deck = [];

function createDeck() {
  for (const rank of ranks) {
    for (const suit of suits) {
      deck.push({ rank, suit });
    }
  }
  shuffleDeck();
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealHand() {
  if (deck.length < 9) {
    createDeck();
  }

  // Clear previous hand
  document.getElementById("your-cards").innerHTML = '';
  document.getElementById("dealer-cards").innerHTML = '';
  document.getElementById('message').textContent = '';

  // Deal two cards to the player
  const playerHand = [deck.pop(), deck.pop()];
  displayCards(playerHand, 'playerCards');

  // Deal five community cards
  const communityCards = [];
  for (let i = 0; i < 5; i++) {
    communityCards.push(deck.pop());
  }
  displayCards(communityCards, 'communityCards');

  // Start betting and gameplay logic
  let pot = 0;
  const playerBet = 0;
  const computerBet = 0;

  // Update the pot display
  updatePot(pot);

  // Implement gameplay and betting logic here...

  // For simplicity, let's just display a message indicating the end of the hand.
  document.getElementById('message').textContent = 'Hand Over. Click "Deal" for a new hand.';
}

function displayCards(cards, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  cards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = `${card.rank} of ${card.suit}`;
    container.appendChild(cardElement);
  });
}

function updatePot(pot) {
  document.getElementById('pot').textContent = `Pot: ${pot}`;
}

// Create a new deck on page load
createDeck();
